/* eslint-disable no-undef */
// AIzaSyDoaE6y_kmDvcFNw2B9T-vezzmvLm3fE9Y
import './style.scss';

import React from 'react';
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer
} from '@react-google-maps/api';

const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDoaE6y_kmDvcFNw2B9T-vezzmvLm3fE9Y';

export interface MapPageProps {}

const positions = {
  center: {
    lat: -21.6757555,
    lng: -48.8127057
  },
  itapolis: {
    lat: -21.5953459,
    lng: -48.8084183
  },
  ibitinga: {
    lat: -21.757661,
    lng: -48.8297996
  }
};

const MapPage = () => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] = React.useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] = React.useState<google.maps.places.SearchBox>();
  const [pointA, setPointA] = React.useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = React.useState<google.maps.LatLngLiteral>();

  const [origin, setOrigin] = React.useState<google.maps.LatLngLiteral | null>(positions.center);
  const [destination, setDestination] = React.useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] = React.useState<google.maps.DistanceMatrixResponse | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: 'DRIVING'
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: response
    };
  }, [response]);

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY} libraries={['places']}>
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={positions.center}
          zoom={12}>
          <div className="address">
            <StandaloneSearchBox onLoad={onLoadA} onPlacesChanged={onPlacesChangedA}>
              <input className="addressField" placeholder="Digite o endereço inicial" />
            </StandaloneSearchBox>
            <StandaloneSearchBox onLoad={onLoadB} onPlacesChanged={onPlacesChangedB}>
              <input className="addressField" placeholder="Digite o endereço final" />
            </StandaloneSearchBox>
            <button onClick={traceRoute} className="btn btn-primary btn-sm text-uppercase">
              Traçar rota
            </button>
          </div>

          {!pointA && !pointB && (
            <>
              <Marker
                position={positions.itapolis}
                options={{
                  title: 'Instituto Yofi - Itápolis',
                  label: {
                    fontSize: '1.5em',
                    text: 'Instituto Yofi - Itápolis',
                    className: 'map-marker'
                  }
                }}
              />
              <Marker
                position={positions.ibitinga}
                options={{
                  title: 'Instituto Yofi - Ibitinga',
                  label: {
                    fontSize: '1.5em',
                    text: 'Instituto Yofi - Ibitinga',
                    className: 'map-marker'
                  }
                }}
              />
            </>
          )}

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService options={directionsServiceOptions} callback={directionsCallback} />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
