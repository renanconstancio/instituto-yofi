import { GoogleApiWrapper, Map, Polygon } from 'google-maps-react';

// eslint-disable-next-line no-unused-vars
const MapGoogle = (props: any) => {
  const triangleCoords = [{ lat: -21.5930669, lng: -48.8181579 }];
  return (
    <Map google={props.google} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Polygon
        paths={triangleCoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor="#0000FF"
        fillOpacity={0.35}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoaE6y_kmDvcFNw2B9T-vezzmvLm3fE9Y',
  LoadingContainer: MapGoogle
})(MapGoogle);
