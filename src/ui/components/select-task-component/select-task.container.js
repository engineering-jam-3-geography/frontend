import {Component} from 'react';
import PropTypes from 'prop-types';

import {renderTaskByType} from './utils';

class SelectContainer extends Component {
    handleRadioChange(radioValue) {
        this.setState({radioValue: radioValue.target.value});
    }

    render() {
        const task = this.props;
        const taskType = task.task.id === '1' ? 'MAP_TEXT' : 'CARD';

        return renderTaskByType(task, taskType);
    }
}

SelectContainer.propTypes = {
    task: PropTypes.object
};

export default SelectContainer;
