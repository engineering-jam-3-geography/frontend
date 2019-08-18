import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import find from 'lodash/find';
import {connect} from 'react-redux';
import Layout from '../../components/Layout';
import TaskContainer from '../../components/select-task-component';

/**
 * Renders task page
 * @returns {JSX}
 */
const TaskPage = ({
    taskId,
    tasks
}) => {
    const currentTask = find(tasks, (task) => task.id === taskId);

    return (
        <Layout
            disableHeader
            disableFooter>
            <TaskContainer task={currentTask} />
        </Layout>
    );
};

TaskPage.propTypes = {
    taskId: PropTypes.string,
    tasks: PropTypes.array
};

TaskPage.defaultProps = {
    tasks: []
};

export default flow(
    connect(
        (state) => ({
            tasks: state.tasks.list
        })
    )
)(TaskPage);
