import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import TaskPage from '../../pages/TaskPage';
import ResultPage from '../../pages/ResultPage';

/**
 * Renders Routes component
 * @returns {JSX}
 */
const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/task/:id" render={({match}) => <TaskPage taskId={match.params.id} />} />
        <Route path="/result" render={() => <ResultPage />} />
    </Switch>
);


export default Routes;
