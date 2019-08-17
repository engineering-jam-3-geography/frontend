const getPolygonCenter = (paths) => {
    const bounds = new google.maps.LatLngBounds();

    const polygonCoords = paths.map((path) => (new google.maps.LatLng(path.lat, path.lng)));

    for (let i = 0; i < polygonCoords.length; i += 1) {
        bounds.extend(polygonCoords[i]);
    }

    return bounds.getCenter();
};

export default getPolygonCenter;
