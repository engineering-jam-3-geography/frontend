import React from 'react';

import CardTask from './../card-task-components';
import MapTextTask from './../MapText';

export const renderTaskByType = (task, taskType) => {
    if (taskType === 'CARD') {
        return <CardTask />;
    }

    return <MapTextTask {...task.task} />;
};
