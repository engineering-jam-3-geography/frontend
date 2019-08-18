import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import {defaultStyles} from '../google-poc/utils';

const BaseMapContainer = withScriptjs(withGoogleMap(({
    ...props,
    children
}) => (
    <GoogleMap {...props}>
        {children}
    </GoogleMap>
)));

const BaseMap = ({
    ...props,
    children
}) => (
    <BaseMapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2YthHGFhZrXFsxCDf9MYUycIxUPkjwHk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%', width: '100%'}} />}
        mapElement={<div style={{height: '100%'}} />}
        defaultOptions={{styles: defaultStyles}}
        {...props}>
        {children}
    </BaseMapContainer>
);

export default BaseMap;
