import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import PropTypes from 'prop-types';
import store, {history} from '../../redux/store';
import '../../ui/assets/svg/sprite';

/**
 * Renders wrapper component
 * @returns {JSX}
 */
const Wrapper = ({children}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {children}
        </ConnectedRouter>
    </Provider>
);

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default Wrapper;
