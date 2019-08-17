import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import {Polygon} from 'react-google-maps';
import BaseMap from '../BaseMap';
import './index.scss';

const MapText = ({
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
                <BaseMap
                    defaultZoom={8}
                    defaultCenter={{lat: -34.397, lng: 150.644}}>
                    {
                        visuals.map((visual, idx) => (
                            <Polygon
                                key={idx}
                                paths={visual.location}
                                options={{
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: '#FF0000',
                                    fillOpacity: 0.35
                                }} />
                        ))
                    }
                </BaseMap>
            </div>


        </section>
    );
};

MapText.propTypes = {
    id: PropTypes.string,
    // description: PropTypes.string,
    // interactions: PropTypes.array,
    // level: PropTypes.number,
    visuals: PropTypes.array
};

export default MapText;
