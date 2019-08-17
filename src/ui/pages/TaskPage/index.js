import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

/**
 * Renders task page
 * @returns {JSX}
 */
const TaskPage = ({
    taskId
}) => (
    <Layout>
        <h1>This task page!</h1>

        <p>Current task id is: {taskId}</p>
    </Layout>
);

TaskPage.propTypes = {
    taskId: PropTypes.string
};

export default TaskPage;
