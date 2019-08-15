import {combineReducers} from 'redux';
import modalsReducer from './modals';

const rootReducer = combineReducers({
    modals: modalsReducer,
});

export default rootReducer;
