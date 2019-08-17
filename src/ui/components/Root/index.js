import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {hot} from 'react-hot-loader';
import store, {history} from '../../../redux/store';
import ScrollToTop from '../ScrollToTop';
import Routes from '../Routes';
import Map from '../google-poc';

/**
 * Renders root component
 * @returns {JSX}
 */
const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/* <ScrollToTop> */}
                {/* <Routes /> */}
                <Map />
            {/* </ScrollToTop> */}
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(Root);
