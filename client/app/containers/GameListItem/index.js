import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import Title from './Title';

export class GameListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, onClick } = this.props;
    if (item.get('img_icon_url') === '') {
      return null;
    }
    const content = (
      <Wrapper onClick={(evt) => onClick(evt, item.get('appid'))}>
        <img role="presentation" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${item.get('appid')}/${item.get('img_logo_url')}.jpg`} />
        <Title>{item.get('name')}</Title>
      </Wrapper>
    );
    return (
      <ListItem key={item.get('appid')} item={content} />
    );
  }
}

GameListItem.propTypes = {
  item: React.PropTypes.instanceOf(Map),
  onClick: React.PropTypes.func,
};

export default connect()(GameListItem);
