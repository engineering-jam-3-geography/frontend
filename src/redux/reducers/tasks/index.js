// import actionTypes from '../../actions/types';
import tasks from './tasks';

const initialState = {
    list: tasks
};

/**
 * Tasks reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const tasksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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

export default tasksReducer;
