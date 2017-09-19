/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import MdAccountBox from 'react-icons/lib/md/account-box';
import GamesList from 'components/GamesList';
import FriendsList from 'components/FriendsList';
import InputIcon from 'components/InputIcon';
import TagsList from 'components/TagsList';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  makeSelectLibraries,
  makeSelectSteamIds,
  makeSelectModalOpen,
  makeSelectGameInfo,
  makeSelectLoading,
  makeSelectFriends,
  makeSelectError,
  makeSelectUser,
} from 'containers/HomePage/selectors';

import Img from './Img';
import {
  changeSteamId,
  loadLibraries,
  loadGameInfo,
  hideModal,
  loadUserFriends,
  changeUserSteamId,
  toggleFriend,
} from './actions';
import Form from './Form';
const customModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
  },
};

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error, libraries, modalOpen, onCloseModal, gameInfo, friends, loading, steamIds, user } = this.props;
    const gamesListProps = {
      loading: loading.get('library'),
      error,
      libraries,
      onClick: this.props.onClickListItem,
    };

    const friendsListProps = {
      loading: loading.get('friends'),
      error,
      friends,
      onClick: this.props.onToggleFriend,
    };
    const iconImage = user.get('avatar') ? <Img src={user.get('avatar')} /> : <MdAccountBox />;
    return (
      <article>
        <Helmet
          title="WCIPWMF"
          meta={[
            { name: 'description', content: 'Search what games can you play with your friends' },
          ]}
        />
        <div>
          <section>
            <Form onSubmit={this.props.loadUserFriends}>
              <InputIcon
                type="text"
                placeholder="Your Steam Id"
                icon={iconImage}
                onChange={(evt) => this.props.onChangeUserSteamId(evt)}
              />
            </Form>
            {/* <Form onSubmit={this.props.onSubmitSteamIds}>
              {this.props.steamIds.map((steamId, idx) => (
                  <InputIcon key={idx}
                    type="text"
                    placeholder="Steam Id"
                    value={steamId}
                    icon = {MdAccountBox}
                    onChange={(evt) => this.props.onChangeSteamId(evt, idx)}
                  />
              ))}
            </Form> */}
            {friends.size > 0 &&
            <h3>Select friends:</h3> }
            <FriendsList {...friendsListProps} />
            {steamIds.size > 1 &&
            <div style={{ textAlign: 'center' }}>
              <h6> {steamIds.size - 1 }/10 friends selected </h6>
              <Button onClick={this.props.onSubmitSteamIds}>Search</Button>
            </div>}
            <GamesList {...gamesListProps} />
          </section>
        </div>
        <Modal
          isOpen={modalOpen}
          contentLabel="Modal"
          style={customModal}
          onRequestClose={onCloseModal}
        >
          { loading.get('modal') || gameInfo === false ? <LoadingIndicator /> : <TagsList tags={gameInfo.get('specs')} />}
        </Modal>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.instanceOf(Map),
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  libraries: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(List),
    React.PropTypes.bool,
  ]),
  steamIds: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(List),
    React.PropTypes.bool,
  ]),
  gameInfo: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(Map),
    React.PropTypes.bool,
  ]),
  friends: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(List),
    React.PropTypes.bool,
  ]),
  user: React.PropTypes.object,
  onSubmitSteamIds: React.PropTypes.func,
  modalOpen: React.PropTypes.bool,
  loadUserFriends: React.PropTypes.func,
  onChangeUserSteamId: React.PropTypes.func,
  onToggleFriend: React.PropTypes.func,
  onClickListItem: React.PropTypes.func,
  onCloseModal: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSteamId: (evt, idx) => dispatch(changeSteamId(evt.target.value, idx)),
    onChangeUserSteamId: (evt) => dispatch(changeUserSteamId(evt.target.value)),
    onClickListItem: (evt, gameId) => dispatch(loadGameInfo(gameId)),
    onToggleFriend: (userId, idx) => dispatch(toggleFriend(userId, idx)),
    loadUserFriends: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadUserFriends());
    },
    onCloseModal: () => dispatch(hideModal()),
    onSubmitSteamIds: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadLibraries());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  libraries: makeSelectLibraries(),
  steamIds: makeSelectSteamIds(),
  error: makeSelectError(),
  modalOpen: makeSelectModalOpen(),
  gameInfo: makeSelectGameInfo(),
  loading: makeSelectLoading(),
  friends: makeSelectFriends(),
  user: makeSelectUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
