import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import AboutPage from '../../pages/AboutPage';

/**
 * Renders Routes component
 * @returns {JSX}
 */
const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
    </Switch>
);


export default Routes;
