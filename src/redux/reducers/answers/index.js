import actionTypes from '../../actions/types';

const initialState = {
    answers: []
};

/**
 * Answers reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const answersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case actionTypes.SAVE_ANSWER:
        return {
            ...state,
            answers: [
                ...state.answers,
                action.payload,
            ]};
    default:
        return state;
    }
};

export default answersReducer;
