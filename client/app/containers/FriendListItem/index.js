import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import DoubleListItem from 'components/DoubleListItem';
import Wrapper from './Wrapper';
import Img from './Img';
import Name from './Name';
import { Map } from 'immutable';


export class PlayerListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, onClick, index } = this.props;
    const content = (
      <Wrapper public={item.get('public')} selected={item.get('selected')} onClick={() => item.get('public') && onClick(item.get('item'), index) }>
          <Img src={item.get('avatar')}/>
            <Name>{item.get('personaname')}</Name>
            {!item.get('public') && <h5 className='private-profile'>Private Profile </h5>}
          
      </Wrapper>
    );
    // Render the content into a list item
    return (
      <DoubleListItem key={item.get('item')} item={content} />
    );
  }
}

PlayerListItem.propTypes = {
  item: React.PropTypes.instanceOf(Map),
};

export default connect()(PlayerListItem);
