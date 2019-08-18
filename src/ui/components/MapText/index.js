import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import flow from 'lodash/flow';
import find from 'lodash/find';
import {withRouter} from 'react-router-dom';
import {compose, withProps, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
import MapTextItem from '../MapTextItem';
import CardForm from './../card-form';
import getPolygonCenter from '../../utils/getPolygonCenter';
import {addAnswer} from '../../../redux/actions/answers';
import redirect from '../../utils/redirect';
import './index.scss';
import mapStyle from './mapStyle';

const MapText = compose(
    withProps({
        loadingElement: <div style={{height: '100%'}} />,
        containerElement: <div style={{height: '100%'}} />,
        mapElement: <div style={{height: '100%'}} />
    }),
    withGoogleMap
)(({
    id,
    description,
    visuals,
    result,
    history,
    onAnswer,
    onSubmitTask
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
                    defaultCenter={globalCenter}
                    defaultOptions={{styles: mapStyle}}>
                    {
                        visuals.map((visual, idx) => (
                            <MapTextItem
                                key={idx}
                                id={idx}
                                paths={visual.location}
                                center={getPolygonCenter(visual.location)}
                                options={{
                                    strokeColor: '#0028AC',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: '#0028AC',
                                    fillOpacity: 0.35
                                }}
                                onAnswer={onAnswer} />
                        ))
                    }
                </GoogleMap>
            </div>

            <div className="MapText__task">
                <CardForm
                    description={description}
                    onSubmit={() => {
                        onSubmitTask(result);

                        redirect({history, link: '/task/2'});
                    }} />
            </div>
        </section>
    );
});

MapText.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    visuals: PropTypes.array,
    result: PropTypes.object,
    history: PropTypes.object,
    onAddAnswer: PropTypes.func,
    onSubmitTask: PropTypes.func
};

export default flow(
    withStateHandlers(
        ({id}) => ({
            result: {
                task_id: id,
                answers: []
            }
        }),
        {
            onAnswer: (state) => (answer) => {
                const answers = (find(state.result.answers, (a) => a.id === answer.id))
                    ? state.result.answers.map((a) => {
                        const result = a.id !== answer.id ? a : answer;

                        return result;
                    })
                    : [...state.result.answers, answer];

                return {
                    result: {
                        ...state.result,
                        answers
                    }
                };
            }
        }
    ),
    connect(
        null,
        (dispatch) => ({
            onSubmitTask: (answer) => dispatch(addAnswer(answer))
        })
    ),
    withRouter
)(MapText);
