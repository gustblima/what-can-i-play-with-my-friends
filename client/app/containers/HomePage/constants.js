/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_STEAM_ID = 'Home/ADD_STEAM_ID';
export const LOAD_LIBRARIES = 'HomePage/LOAD_LIBRARIES';
export const LOAD_LIBRARIES_SUCCESS = 'HomePage/LOAD_LIBRARIES_SUCCESS';
export const LOAD_LIBRARIES_ERROR = 'HomePage/LOAD_LIBRARIES_ERROR';

export const LOAD_GAME_INFO = 'HomePage/LOAD_GAME_INFO';
export const LOAD_GAME_INFO_SUCCESS = 'HomePage/LOAD_GAME_INFO_SUCCESS';
export const LOAD_GAME_INFO_ERROR = 'HomePage/LOAD_GAME_INFO_ERROR';

export const SHOW_MODAL = 'HomePage/SHOW_MODAL';
export const HIDE_MODAL = 'HomePage/HIDE_MODAL';

export const SHOW_LOADING_MODAL = 'HomePage/SHOW_LOADING_MODAL';
export const HIDE_LOADING_MODAL = 'HomePage/HIDE_LOADING_MODAL';


export const LOAD_USER_FRIENDS = 'HomePage/LOAD_USER_FRIENDS';
export const LOAD_USER_FRIENDS_SUCCESS = 'HomePage/LOAD_USER_FRIENDS_SUCCESS';
export const LOAD_USER_FRIENDS_ERROR = 'HomePage/LOAD_USER_FRIENDS_ERROR';

export const CHANGE_USER_STEAM_ID = 'HomePage/CHANGE_USER_STEAM_ID';
export const TOGGLE_FRIEND = 'HomePage/TOGGLE_FRIEND';
