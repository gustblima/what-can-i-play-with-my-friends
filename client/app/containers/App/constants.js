/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */



export const SHOW_ERROR = 'App/SHOW_ERROR'
export const SHOW_LOADING = 'App/SHOW_LOADING'
export const HIDE_LOADING = 'App/HIDE_LOADING'
export const SHOW_LOADING_MODAL = 'App/SHOW_LOADING_MODAL'
export const HIDE_LOADING_MODAL = 'App/HIDE_LOADING_MODAL'
export const DEFAULT_LOCALE = 'en';

