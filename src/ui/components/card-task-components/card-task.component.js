import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import CardForm from './../card-form';

import './component.scss';

const MyMapComponent = ({defaultOptions, questions, description, onSubmit, onChange}) => (
    <div className="container">

        <div className="card">
            <CardForm
                title="Задание 2 из 2"
                description={description}
                questions={questions}
                onSubmit={onSubmit}
                onChange={onChange} />
        </div>

        <div className="mapWrapper">
            <GoogleMap
                defaultOptions={defaultOptions}
                defaultZoom={9}
                defaultCenter={{lat: 1.38, lng: 103.85}}>
                <Marker position={{lat: 1.38, lng: 103.85}} />
            </GoogleMap>
        </div>
    </div>
);

MyMapComponent.propTypes = {
    defaultOptions: PropTypes.PropTypes.object,
    questions: PropTypes.array,
    description: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

MyMapComponent.defaultProps = {
    defaultOptions: [],
};

export default withScriptjs(withGoogleMap(MyMapComponent));
