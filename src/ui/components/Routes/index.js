import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import TaskPage from '../../pages/TaskPage';
import ExamplePage from '../../pages/ExamplePage';
import AboutPage from '../../pages/AboutPage';

/**
 * Renders Routes component
 * @returns {JSX}
 */
const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/task/:id" render={({match}) => <TaskPage taskId={match.params.id} />} />
        <Route path="/example" render={() => <ExamplePage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
    </Switch>
);


export default Routes;
