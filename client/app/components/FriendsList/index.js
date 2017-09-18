import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import FriendListItem from 'containers/FriendListItem';
import Wrapper from './Wrapper';
import Element from './Element';

function FriendsList({ loading, error, friends, onClick, user }) {
    let content;
    if (loading) {
        return <LoadingIndicator />;
    }

    if (error !== false) {
        const ErrorComponent = () => (
          <ListItem item={'Something went wrong, please try again!'} />
        );
        return <List component={ErrorComponent} />;
    }

    
    if (friends) {
        if(friends.size == 0){
            return <h5>Private profile ?</h5>;
        }
        content = friends.map((item, index) => (
            <Element key={`item-${index}`}>
                <FriendListItem 
                                onClick={onClick} 
                                index={index} 
                                item={item}  />
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
  return null;
}

FriendsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  friends: PropTypes.any,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default FriendsList;