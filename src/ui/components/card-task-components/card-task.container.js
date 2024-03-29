import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import flow from 'lodash/flow';
import {withRouter} from 'react-router-dom';

import MapContainer from './card-task.component';

import {defaultStyles, getTask, getQuestions} from './utils';
import redirect from '../../utils/redirect';

import {saveAnswer} from '../../../redux/actions/modals';

class GoogleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: getTask(),
            radioValue: '',
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRadioChange(radioValue) {
        this.setState({radioValue: radioValue.target.value});
    }

    handleSubmit() {
        const {onSave, history} = this.props;
        const {radioValue, task} = this.state;

        onSave({answer: radioValue, taskId: task.id});
        redirect({history, link: '/result'});
    }

    render() {
        const questions = getQuestions(this.state.task);
        return (
            <MapContainer
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2YthHGFhZrXFsxCDf9MYUycIxUPkjwHk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: '100%'}} />}
                containerElement={<div style={{height: '100%', width: '100%'}} />}
                mapElement={<div style={{height: '100%'}} />}
                defaultOptions={{
                    styles: defaultStyles,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    streetViewControl: false
                }}
                questions={questions}
                onChange={this.handleRadioChange}
                onSubmit={this.handleSubmit}
                markup={this.state.task.markup}
                description={this.state.task.description} />
        );
    }
}

GoogleContainer.propTypes = {
    onSave: PropTypes.func.isRequired,
    history: PropTypes.object
};

export default flow(
    connect(
        null,
        (dispatch) => ({
            onSave: (answer) => dispatch(saveAnswer(answer))
        })
    ),
    withRouter
)(GoogleContainer);
