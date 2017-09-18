import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import GameListItem from 'containers/GameListItem';

function GamesList({ loading, error, libraries, onClick }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (libraries !== undefined && libraries !== false) {
    if(libraries.size == 0){
      return <h5>No games to play :(</h5>;
    }
    return <List items={libraries} component={GameListItem} onClick={ onClick }/>;
  }

  return null;
}

GamesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  libraries: PropTypes.any,
  onClick: PropTypes.func
};

export default GamesList;
