import actionTypes from '../types';

/**
 * Show password modal
 * @returns {Object}
 */
export const showPasswordModal = () => ({
    type: actionTypes.SHOW_PASSWORD_MODAL,
    payload: ''
});

/**
 * Hide password modal
 * @returns {Object}
 */
export const hidePasswordModal = () => ({
    type: actionTypes.HIDE_PASSWORD_MODAL,
    payload: ''
});

export const saveAnswer = (answer) => ({
    type: actionTypes.SAVE_ANSWER,
    payload: answer,
});
