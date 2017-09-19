import React, { PropTypes } from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import FriendListItem from 'containers/FriendListItem';
import Wrapper from './Wrapper';
import Element from './Element';

function FriendsList({ loading, friends, onClick }) {
  let content;
  if (loading) {
    return <LoadingIndicator />;
  }
  if (friends !== undefined && friends !== false) {
    content = friends.map((item, index) => (
      <Element key={`item-${index}`}>
        <FriendListItem
          onClick={onClick}
          index={index}
          item={item}
        />
      </Element>
    ));
  } else {
    return null;
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

FriendsList.propTypes = {
  loading: PropTypes.bool,
  friends: PropTypes.any,
  onClick: PropTypes.func,
};

export default FriendsList;
