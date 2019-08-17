import React, {Component} from 'react';

import MapContainer from './google-poc.component';

import {defaultStyles} from './utils';

class GoogleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [],
            shouldRenderRightClickActions: false,
            currentClickCoord: {},
        };
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    render() {
        return (
            <MapContainer
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2YthHGFhZrXFsxCDf9MYUycIxUPkjwHk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: '100%'}} />}
                containerElement={<div style={{height: '100%', width: '100%'}} />}
                mapElement={<div style={{height: '100%'}} />}
                defaultOptions={{styles: defaultStyles}}
                handleDragEnd={this.handleDragEnd}
                taskType="ATTACH"
                taskData={{data: [
                    {lat: 37.772, lng: -122.214},
                    {lat: -21.291, lng: 157.821}
                ]}}
            />
        );
    }
}

export default GoogleContainer;
