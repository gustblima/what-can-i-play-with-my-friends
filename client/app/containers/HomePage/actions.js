
import {
  ADD_STEAM_ID,
  LOAD_LIBRARIES,
  LOAD_LIBRARIES_SUCCESS,
  LOAD_LIBRARIES_ERROR,
  LOAD_GAME_INFO,
  LOAD_GAME_INFO_SUCCESS,
  LOAD_GAME_INFO_ERROR,
  HIDE_MODAL,
  CHANGE_USER_STEAM_ID,
  LOAD_USER_FRIENDS,
  LOAD_USER_FRIENDS_SUCCESS,
  LOAD_USER_FRIENDS_ERROR,
  TOGGLE_FRIEND

} from './constants';

export function toggleFriend(userSteamId, idx){
  return {
    type:TOGGLE_FRIEND,
    userSteamId,
    idx
  }
}

export function changeUserSteamId(userSteamId){
  return {
    type:CHANGE_USER_STEAM_ID,
    userSteamId
  }
}
export function loadUserFriends(){
  return {
    type: LOAD_USER_FRIENDS,
  };
}

export function loadUserFriendsSuccess(user, friends){
  return {
    type: LOAD_USER_FRIENDS_SUCCESS,
    friends,
    user
  };
}

export function loadUserFriendsError(err){
  return {
    type: LOAD_USER_FRIENDS_ERROR,
    error
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function changeSteamId(steamId, idx) {
  return {
    type: ADD_STEAM_ID,
    steamId,
    idx
  };
}

export function loadLibraries() {
  return {
    type: LOAD_LIBRARIES,
  };
}

export function libraryLoaded(library) {
  return {
    type: LOAD_LIBRARIES_SUCCESS,
    library,
  };
}

export function libraryLoadingError(error) {
  return {
    type: LOAD_LIBRARIES_ERROR,
    error,
  };
}

export function loadGameInfo(gameId) {
  return {
    type: LOAD_GAME_INFO,
    gameId
  }
}

export function loadGameInfoSuccess(gameInfo) {
  return {
    type: LOAD_GAME_INFO_SUCCESS,
    gameInfo: gameInfo
  }
}

export function loadGameInfoError(error) {
  return {
    type: LOAD_GAME_INFO_ERROR,
    error: error
  }
}