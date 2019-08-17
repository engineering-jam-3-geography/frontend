import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import {compose, withProps} from 'recompose';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
import MapTextItem from '../MapTextItem';
import getPolygonCenter from '../../utils/getPolygonCenter';
import './index.scss';

const MapText = compose(
    withProps({
        loadingElement: <div style={{height: '100%'}} />,
        containerElement: <div style={{height: '100%'}} />,
        mapElement: <div style={{height: '100%'}} />,
    }),
    withGoogleMap
)(({
    id,
    // description,
    // interactions,
    // level,
    visuals
}) => {
    const componentClass = Classnames({
        MapText: true
    });

    return (
        <section className={componentClass} id={id}>
            <div className="MapText__map">
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{lat: -34.397, lng: 150.644}}
                >
                    {
                        visuals.map((visual, idx) => (
                            <MapTextItem
                                key={idx}
                                paths={visual.location}
                                center={getPolygonCenter(visual.location)}
                                options={{
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: '#FF0000',
                                    fillOpacity: 0.35
                                }} />
                        ))
                    }
                </GoogleMap>
            </div>
        </section>
    );
});

MapText.propTypes = {
    id: PropTypes.string,
    // description: PropTypes.string,
    // interactions: PropTypes.array,
    // level: PropTypes.number,
    visuals: PropTypes.array
};

export default MapText;
