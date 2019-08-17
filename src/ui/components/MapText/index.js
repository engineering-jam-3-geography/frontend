import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import flow from 'lodash/flow';
import {compose, withProps} from 'recompose';
import {connect} from 'react-redux';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
import MapTextItem from '../MapTextItem';
import getPolygonCenter from '../../utils/getPolygonCenter';
import {addAnswer} from '../../../redux/actions/answers';
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
    visuals,
    onAddAnswer
}) => {
    const componentClass = Classnames({
        MapText: true
    });

    const globalPolygon = visuals.reduce((accumulator, visual) => [...accumulator, ...visual.location], []);
    const globalCenter = getPolygonCenter(globalPolygon);

    return (
        <section className={componentClass} id={id}>
            <div className="MapText__map">
                <GoogleMap
                    defaultZoom={4}
                    defaultCenter={globalCenter}>
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
                                }}
                                onAddAnswer={onAddAnswer(id)} />
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
    visuals: PropTypes.array,
    onAddAnswer: PropTypes.func
};

export default flow(
    connect(
        null,
        (dispatch) => ({
            onAddAnswer: (taskId) => ({text, location}) => dispatch(addAnswer({
                taskId,
                answers: [
                    {
                        text,
                        location
                    }
                ]
            }))
        })
    )
)(MapText);
