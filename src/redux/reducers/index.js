import {combineReducers} from 'redux';
import modalsReducer from './modals';
import tasksReducer from './tasks';
import answersReducer from './answers';

const rootReducer = combineReducers({
    modals: modalsReducer,
    tasks: tasksReducer,
    answers: answersReducer
});

export default rootReducer;
