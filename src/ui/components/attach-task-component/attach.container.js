import React, {Component} from 'react';

import MapContainer from './attach.component';

import {defaultStyles, handleSaveCurrentCoords, getTask} from './utils';

class GoogleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lineStart: undefined,
            lineEnd: undefined,
            lineEndTemp: {},
            shouldHandleMouseMove: true,
            task: getTask(),
        };
        this.handleClick = this.handleClick.bind(this);
        this.onCancelSelectionClick = this.onCancelSelectionClick.bind(this);
    }

    onCancelSelectionClick() {
        this.setState({
            lineStart: undefined,
            lineEnd: undefined,
            lineEndTemp: {},
            shouldHandleMouseMove: true,
        });
    }

    handleClick(e) {
        const {lineStart, lineEnd} = this.state;

        if (!lineStart) {
            this.setState({lineStart: handleSaveCurrentCoords(e)});
        } else if (!lineEnd) {
            this.setState({lineEnd: handleSaveCurrentCoords(e), lineEndTemp: undefined});
        }
    }

    render() {
        const {lineStart, lineEnd, lineEndTemp} = this.state;

        return (
            <MapContainer
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2YthHGFhZrXFsxCDf9MYUycIxUPkjwHk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: '100%'}} />}
                containerElement={<div style={{height: '100%', width: '100%'}} />}
                mapElement={<div style={{height: '100%'}} />}
                defaultOptions={{styles: defaultStyles}}
                handleMapClick={this.handleClick}
                lineStart={lineStart}
                lineEnd={lineEnd}
                onCancelSelectionClick={this.onCancelSelectionClick}
                handleMouseMove={this.handleMouseMove}
                lineEndTemp={lineEndTemp}
            />
        );
    }
}

export default GoogleContainer;
