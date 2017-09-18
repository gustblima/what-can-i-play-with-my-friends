/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');



const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

const makeSelectSteamIds = () => createSelector(
  selectHome,
  (homeState) => homeState.get('steamIds')
)

const makeSelectLibraries = () => createSelector(
  selectHome,
  (homeState) => homeState.get('libraries')
);


const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const makeSelectModalOpen = () => createSelector(
  selectHome,
  (homeState) => homeState.get('modalOpen')
)

const makeSelectGameInfo = () => createSelector(
  selectHome,
  (homeState) => homeState.get('gameInfo')
)

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
)


const makeSelectFriends = () => createSelector(
  selectHome,
  (homeState) => homeState.get('friends')
)

export {
  selectHome,
  makeSelectUsername,
  makeSelectSteamIds,
  makeSelectLibraries,
  makeSelectModalOpen,
  makeSelectGameInfo,
  makeSelectLoading,
  makeSelectUser,
  makeSelectFriends,
  makeSelectError,
};
