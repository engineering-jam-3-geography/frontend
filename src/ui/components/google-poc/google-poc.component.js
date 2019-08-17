import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';

// import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const MyMapComponent = ({defaultOptions}) => (
    <GoogleMap
        defaultOptions={defaultOptions}
        defaultZoom={4}
        defaultCenter={{lat: 53.904317, lng: 27.586564}}
    >
        {
            // taskType === 'ATTACH' &&
            //     (<Polyline
            //         path={taskData.data}
            //         editable
            //         onMouseUp={handleDragEnd}
            //     />)
        }
    </GoogleMap>
);

MyMapComponent.propTypes = {
    defaultOptions: PropTypes.arrayOf(PropTypes.object),
    // handleClick: PropTypes.func.isRequired,
    // taskData: PropTypes.object.isRequired,
    // taskType: PropTypes.string.isRequired,
};

MyMapComponent.defaultProps = {
    markers: [],
    defaultOptions: [],
    shouldRenderRightClickActions: false,
    currentClickCoord: {},
};

export default withScriptjs(withGoogleMap(MyMapComponent));
