/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { List, fromJS } from 'immutable';
import {
  LOAD_LIBRARIES,
  LOAD_LIBRARIES_SUCCESS,
  LOAD_LIBRARIES_ERROR,
  LOAD_GAME_INFO,
  LOAD_GAME_INFO_SUCCESS,
  LOAD_GAME_INFO_ERROR,
  LOAD_USER_FRIENDS,
  LOAD_USER_FRIENDS_ERROR,
  LOAD_USER_FRIENDS_SUCCESS,
  CHANGE_USER_STEAM_ID,
  TOGGLE_FRIEND,
  HIDE_MODAL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  steamIds: List([]),
  libraries: false,
  gameInfo: false,
  loading: {
    modal: false,
    library: false,
    friends: false,
  },
  modalOpen: false,
  user: {
    id: false,
    avatar: false,
    item: false,
  },
  friends: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_MODAL:
      return state
        .set('modalOpen', false);
    case LOAD_LIBRARIES:
      return state
        .setIn(['loading', 'library'], true)
        .set('libraries', false);
    case LOAD_LIBRARIES_SUCCESS:
      return state
        .set('libraries', fromJS(action.library))
        .setIn(['loading', 'library'], false)
        .set('currentUser', action.username);
    case LOAD_LIBRARIES_ERROR:
      return state
        .setIn(['loading', 'library'], false)
        .set('error', action.error);
    case LOAD_GAME_INFO:
      return state
        .set('error', false)
        .set('modalOpen', true)
        .setIn(['loading', 'modal'], true)
        .set('gameInfo', false);
    case LOAD_GAME_INFO_SUCCESS:
      return state
        .set('gameInfo', fromJS(action.gameInfo))
        .setIn(['loading', 'modal'], false);
    case LOAD_GAME_INFO_ERROR:
      return state
        .set('error', action.error)
        .setIn(['loading', 'modal'], false);
    case LOAD_USER_FRIENDS:
      return state
        .set('friends', false)
        .setIn(['loading', 'friends'], true)
        .set('steamIds', List([]));
    case LOAD_USER_FRIENDS_ERROR:
      return state
        .set('friends', false)
        .setIn(['loading', 'friends'], false)
        .set('error', action.error);
    case LOAD_USER_FRIENDS_SUCCESS:
      return state
        .set('friends', fromJS(action.friends))
        .setIn(['loading', 'friends'], false)
        .update('steamIds', (list) => list.push(action.user.item))
        .setIn(['user', 'avatar'], action.user.avatar)
        .setIn(['user', 'item'], action.user.item);
    case CHANGE_USER_STEAM_ID:
      return state
        .setIn(['user', 'id'], action.userSteamId)
        .set('friends', false)
        .setIn(['user', 'avatar'], false)
        .set('steamIds', false);
    case TOGGLE_FRIEND: {
      let steamIds = state.get('steamIds');
      if (steamIds.contains(action.userSteamId)) {
        steamIds = steamIds.filter((item) => (item !== action.userSteamId));
      } else if (steamIds.size < 10) {
        steamIds = steamIds.concat(action.userSteamId);
      } else {
        return state;
      }
      return state
        .set('steamIds', steamIds)
        .set('libraries', false)
        .updateIn(['friends', action.idx, 'selected'], (selected) => !selected);
    }
    default:
      return state;
  }
}

export default homeReducer;
