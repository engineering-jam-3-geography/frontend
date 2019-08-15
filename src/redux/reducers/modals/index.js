import actionTypes from '../../actions/types';

const initialState = {
    passwordModal: {
        isHidden: true
    }
};

/**
 * Modals reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const modalsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case actionTypes.SHOW_PASSWORD_MODAL:
        return {
            ...state,
            passwordModal: {
                isHidden: false
            }
        };

    case actionTypes.HIDE_PASSWORD_MODAL:
        return {
            ...state,
            passwordModal: {
                isHidden: true
            }
        };

    default:
        return state;
    }
};

export default modalsReducer;
