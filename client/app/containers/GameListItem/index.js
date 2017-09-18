/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import Title from './Title';
import { Map } from 'immutable'


export class GameListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item , onClick} = this.props;
    if(item.get('img_icon_url') === "") 
      return null
    const content = (
      <Wrapper onClick={(evt) => onClick(evt, item.get('appid'))}>
          <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${item.get('appid')}/${item.get('img_logo_url')}.jpg`}/>
          <Title>{item.get('name')}</Title>
      </Wrapper>
    );
    // Render the content into a list item
    return (
      <ListItem key={item.get('appid')} item={content} />
    );
  }
}

GameListItem.propTypes = {
  item: React.PropTypes.instanceOf(Map),
  currentUser: React.PropTypes.string,
};

export default connect()(GameListItem);
