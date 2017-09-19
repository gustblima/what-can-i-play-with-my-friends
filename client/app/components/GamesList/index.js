import React, { PropTypes } from 'react';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import GameListItem from 'containers/GameListItem';

function GamesList({ loading, libraries, onClick }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (libraries !== undefined && libraries !== false) {
    if (libraries.size === 0) {
      return <h5>No games to play :(</h5>;
    }
    return <List items={libraries} component={GameListItem} onClick={onClick} />;
  }

  return null;
}

GamesList.propTypes = {
  loading: PropTypes.bool,
  libraries: PropTypes.any,
  onClick: PropTypes.func,
};

export default GamesList;
