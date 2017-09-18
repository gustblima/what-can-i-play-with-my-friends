
import {
  SHOW_ERROR,
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_LOADING_MODAL,
  HIDE_LOADING_MODAL
} from './constants';


export function showError(error) {
  return {
    type: SHOW_ERROR,
    error
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
export function showLoading() {
  return {
    type: SHOW_LOADING,
  };
}

