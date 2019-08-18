import actionTypes from '../types';


export const addAnswer = (answer = {}) => ({
    type: actionTypes.ADD_ANSWER,
    payload: answer
});
