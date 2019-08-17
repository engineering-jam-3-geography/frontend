import actionTypes from '../../actions/types';

const initialState = {
    list: []
};

/**
 * Answers reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const answersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case actionTypes.ADD_ANSWER:
        return {
            ...state,
            list: [
                ...state.list,
                action.payload
            ]
        };

    // case actionTypes.SHOW_PASSWORD_MODAL:
    //     return {
    //         ...state,
    //         passwordModal: {
    //             isHidden: false
    //         }
    //     };

    default:
        return state;
    }
};

export default answersReducer;
