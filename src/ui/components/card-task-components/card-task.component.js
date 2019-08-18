import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker, Polygon} from 'react-google-maps';

import CardForm from './../card-form';

import './component.scss';

const MyMapComponent = ({defaultOptions, markerPosition, questions, description, onSubmit, onChange}) => (
    <div className="container">

        <div className="card">
            <CardForm
                description={description}
                questions={questions}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>

        <div className="mapWrapper">
            <GoogleMap
                defaultOptions={defaultOptions}
                defaultZoom={9}
                defaultCenter={{lat: 1.38, lng: 103.85}}
            >
                <Marker position={{lat: 1.38, lng: 103.85}} />
            </GoogleMap>
        </div>
    </div>
);

MyMapComponent.propTypes = {
    defaultOptions: PropTypes.PropTypes.object,

};

MyMapComponent.defaultProps = {
    defaultOptions: [],
};

export default withScriptjs(withGoogleMap(MyMapComponent));
