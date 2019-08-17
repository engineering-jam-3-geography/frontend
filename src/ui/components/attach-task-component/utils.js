export const handleSaveCurrentCoords = (e) => (
    {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
    }
);

export const defaultStyles =
[
    {
        featureType: 'poi',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    }
];
