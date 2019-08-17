import {combineReducers} from 'redux';
import modalsReducer from './modals';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
    modals: modalsReducer,
    tasks: tasksReducer
});

export default rootReducer;
