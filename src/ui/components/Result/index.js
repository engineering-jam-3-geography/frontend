import React from 'react';
import {compose, withProps} from 'recompose';
import {withGoogleMap, GoogleMap} from 'react-google-maps';
import Classnames from 'classnames';
import mapStyle from '../MapText/mapStyle';
import resultImage from '../../assets/img/vis-result.png';
import './index.scss';

const Result = compose(
    withProps({
        loadingElement: <div style={{height: '100%'}} />,
        containerElement: <div style={{height: '100%'}} />,
        mapElement: <div style={{height: '100%'}} />
    }),
    withGoogleMap
)(() => {
    const componentClass = Classnames({
        Result: true
    });

    return (
        <section className={componentClass}>
            <div className="Result__map">
                <GoogleMap
                    defaultZoom={4}
                    defaultCenter={{lat: 56.524014, lng: 20.554646}}
                    defaultOptions={{styles: mapStyle}} />
            </div>

            <div className="Result__modal">
                <div className="Result__view">
                    <img src={resultImage} alt="result" />
                </div>
            </div>
        </section>
    );
});

export default Result;
