import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker, Polygon} from 'react-google-maps';

// import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import './component.scss';

const MyMapComponent = ({defaultOptions, lineStart, lineEnd, handleMapClick, onCancelSelectionClick}) => (
    <div className="container">

        <div className="mapWrapper">
            <GoogleMap
                defaultOptions={defaultOptions}
                defaultZoom={4}
                defaultCenter={{lat: 53.904317, lng: 27.586564}}
                onClick={handleMapClick}>
                {
                    lineStart && lineEnd &&
                    <Polyline
                        path={[lineStart, lineEnd]} />
                }
                {
                    lineStart && !lineEnd &&
                    <Marker
                        position={lineStart} />
                }
                <div className="button">
                    <button onClick={onCancelSelectionClick}>Click to cancel selection.</button>
                </div>
            </GoogleMap>
        </div>
    </div>
);

MyMapComponent.propTypes = {
    defaultOptions: PropTypes.PropTypes.object,
    lineStart: PropTypes.object,
    lineEnd: PropTypes.object,
    handleMapClick: PropTypes.func.isRequired,
    onCancelSelectionClick: PropTypes.func.isRequired,
};

MyMapComponent.defaultProps = {
    defaultOptions: [],
    lineStart: undefined,
    lineEnd: undefined,
    lineEndTemp: {},
};

export default withScriptjs(withGoogleMap(MyMapComponent));
