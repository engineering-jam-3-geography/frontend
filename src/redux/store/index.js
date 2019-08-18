import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import config from '../../config';

const {basename = ''} = config;

const history = createBrowserHistory({
    basename
});
const router = routerMiddleware(history);
const middleware = [router, thunk];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({collapsed: true, diff: true});

    middleware.push(logger);
}

const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export {history};
export default store;
