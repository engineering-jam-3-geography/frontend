import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Classnames from 'classnames';
import {withStateHandlers} from 'recompose';
import {Polygon} from 'react-google-maps';
import {InfoBox} from 'react-google-maps/lib/components/addons/InfoBox';
import Input from '../Input';
import Button from '../Button';
import './index.scss';

const MapTextItem = ({
    id,
    paths,
    options,
    center,
    isOpened,
    isFocused,
    isHovered,
    value,
    location,
    onOpen,
    onChange,
    onFocus,
    onBlur,
    onOver,
    onOut,
    onAnswer
}) => {
    const fieldClass = Classnames({
        MapTextItem__field: true,
        MapTextItem__field_state_focused: isFocused
    });

    return (
        <React.Fragment>
            <Polygon
                paths={paths}
                options={{
                    ...options,
                    strokeOpacity: (isHovered || isOpened) ? 0.8 : 0,
                    fillOpacity: (isHovered || isOpened) ? 0.35 : 0
                }}
                onClick={onOpen}
                onMouseOver={onOver}
                onMouseOut={onOut} />

            {isOpened && (
                <InfoBox
                    defaultPosition={center}
                    options={{closeBoxURL: '', enableEventPropagation: true}}>
                    <div className={fieldClass}>
                        <div className="MapTextItem__input">
                            <Input
                                autoFocus
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur} />
                        </div>


                        <div className="MapTextItem__button">
                            <Button
                                text="Сохранить"
                                disabled={!value}
                                onClick={() => {
                                    onAnswer({
                                        id,
                                        type: 'MAP_TEXT',
                                        value: {
                                            text: value,
                                            location
                                        }
                                    });
                                }} />
                        </div>
                    </div>
                </InfoBox>
            )}
        </React.Fragment>
    );
};

MapTextItem.propTypes = {
    id: PropTypes.number,
    paths: PropTypes.array,
    options: PropTypes.object,
    isOpened: PropTypes.bool,
    isFocused: PropTypes.bool,
    isHovered: PropTypes.bool,
    value: PropTypes.string,
    location: PropTypes.string,
    center: PropTypes.object,
    onOpen: PropTypes.func,
    onAnswer: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onOver: PropTypes.func,
    onOut: PropTypes.func
};

export default flow(
    withStateHandlers(
        () => ({
            isOpened: false,
            value: '',
            location: '',
            isFocused: false,
            isHovered: false
        }),
        {
            onOpen: () => (event = {}) => {
                const {latLng = {}} = event;

                return {
                    isOpened: true,
                    location: `${latLng.lat()}, ${latLng.lng()}`
                };
            },
            onFocus: () => () => ({
                isFocused: true
            }),
            onBlur: () => () => ({
                isFocused: false
            }),
            onChange: () => (event) => ({
                value: event.target.value
            }),
            onOver: () => () => ({
                isHovered: true
            }),
            onOut: () => () => ({
                isHovered: false
            })
        }
    )
)(MapTextItem);
