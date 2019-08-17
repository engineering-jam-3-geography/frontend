import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import {withStateHandlers} from 'recompose';
import {Polygon} from 'react-google-maps';
import {InfoBox} from 'react-google-maps/lib/components/addons/InfoBox';
import Input from '../Input';
import Button from '../Button';
import './index.scss';

const MapTextItemItem = ({
    paths,
    options,
    center,
    isOpened,
    onClick
}) => (
    <React.Fragment>
        <Polygon
            paths={paths}
            options={options}
            onClick={isOpened ? null : onClick} />

        {isOpened && (
            <InfoBox
                defaultPosition={center}
                options={{closeBoxURL: '', enableEventPropagation: true}}>
                <div className="MapTextItem__field">
                    <div className="MapTextItem__input">
                        <Input />
                    </div>

                    <div className="MapTextItem__button">
                        <Button
                            text="Сохранить"
                            onClick={onClick} />
                    </div>
                </div>
            </InfoBox>
        )}
    </React.Fragment>
);

MapTextItemItem.propTypes = {
    paths: PropTypes.array,
    options: PropTypes.object,
    isOpened: PropTypes.bool,
    center: PropTypes.object,
    onClick: PropTypes.func
};

export default flow(
    withStateHandlers(
        () => ({
            isOpened: false
        }),
        {
            onClick: (state) => () => ({
                isOpened: !state.isOpened
            })
        }
    )
)(MapTextItemItem);
