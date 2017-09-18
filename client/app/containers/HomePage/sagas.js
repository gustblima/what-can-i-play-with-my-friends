/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_LIBRARIES, LOAD_GAME_INFO, LOAD_USER_FRIENDS } from 'containers/HomePage/constants';
import { libraryLoaded, libraryLoadingError, loadGameInfoSuccess, loadGameInfoError, showModal, showLoadingModal, hideLoadingModal, loadUserFriendsSuccess, loadUserFriendsError} from 'containers/HomePage/actions';
import { showLoading, hideLoading } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectSteamIds, makeSelectUser } from 'containers/HomePage/selectors';
import API_URL  from 'api'
/**
 * Github repos request/response handler
 */
export function* getLibraries() {
  // Select username from store
  const steamIds = yield select(makeSelectSteamIds());
  const url = `${API_URL}/libraries?users=${steamIds.join(",")}`
  try { 
      const library = yield call(request, url);
      yield put(libraryLoaded(library));
  } catch (err) {
    yield put(libraryLoadingError(err));
  }
}

export function* getGameInfo(action){
  const { gameId }  = action
  const url = `${API_URL}/libraries/games/${gameId}`
  try{
    const gameInfo = yield call(request, url);
    yield put(loadGameInfoSuccess(gameInfo));
  }catch(err){
    yield put(loadGameInfoError(err));
  }
}

export function* getUserFriends(){
  const user = yield select(makeSelectUser());
  const url = `${API_URL}/users/${user.get('id')}/friends/`;
  console.log(url);
  try{
    const data = yield call(request, url);
    yield put(loadUserFriendsSuccess(data.user, data.friends));
  }catch(err){
    yield put(loadUserFriendsError(err));
  }
}

export function* steamData() {
  const watcher = yield takeLatest(LOAD_LIBRARIES, getLibraries);
}

export function* steamInfo(){
  const watcher = yield takeLatest(LOAD_GAME_INFO, getGameInfo);
}

export function* steamUserFriends(){
  const watcher = yield takeLatest(LOAD_USER_FRIENDS, getUserFriends);
}

export default [
  steamData,
  steamInfo,
  steamUserFriends
];
