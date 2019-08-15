import 'core-js/es6/set';
import 'core-js/es6/object';
import 'core-js/es6/string';
import 'core-js/es6/promise';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './ui/components/Root';
import config from './config';
import './ui/assets/svg/sprite';

const {root = ''} = config;

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById(root)
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./ui/components/Root', () => {
        // eslint-disable-next-line global-require
        render(require('./ui/components/Root'));
    });
}
