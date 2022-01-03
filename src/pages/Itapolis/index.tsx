/* eslint-disable no-undef */
import './style.scss';
import { Helmet } from 'react-helmet';
import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';

import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer
} from '@react-google-maps/api';
import { useCallback, useMemo, useState } from 'react';

const REACT_APP_GOOGLE_API_KEY = 'AIzaSyDoaE6y_kmDvcFNw2B9T-vezzmvLm3fE9Y';

export interface MapPageProps {}

const positions = {
  center: {
    lat: -21.5953459,
    lng: -48.8127057
  },
  itapolis: {
    lat: -21.5953459,
    lng: -48.8084183
  }
};

const Ibitinga = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] = useState<google.maps.places.SearchBox>();
  const [pointA, setPointA] = useState<google.maps.LatLngLiteral>(positions.itapolis);

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(positions.center);
  const [destination, setDestination] = useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] = useState<google.maps.DistanceMatrixResponse | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    console.log(google.maps.places.SearchBox);
    setSearchBoxA(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    };
    setPointA(positions.itapolis);
    setDestination(location);
    setResponse(null);
    map?.panTo(location);
  };

  // const onPlacesChangedB = () => {
  //   const places = searchBoxB!.getPlaces();
  //   console.log(places);
  //   const place = places![0];
  //   const location = {
  //     lat: place?.geometry?.location?.lat() || 0,
  //     lng: place?.geometry?.location?.lng() || 0
  //   };
  //   setPointB(location);
  //   setOrigin(null);
  //   setDestination(null);
  //   setResponse(null);
  //   map?.panTo(location);
  // };

  // const traceRoute = () => {
  //   if (pointA && pointB) {
  //     setOrigin(pointA);
  //     setDestination(pointB);
  //   }
  // };

  const traceRoute = () => {
    if (pointA) {
      setOrigin(positions.itapolis);
      setDestination(pointA);
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: 'DRIVING'
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = useMemo<any>(() => {
    return {
      directions: response
    };
  }, [response]);

  return (
    <>
      <Topo />
      <div className="map">
        <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY} libraries={['places']}>
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={positions.center}
            zoom={12}>
            <div className="address">
              <StandaloneSearchBox onLoad={onLoadA} onPlacesChanged={onPlacesChangedA}>
                <input className="addressField" placeholder="Digite seu endereço" />
              </StandaloneSearchBox>
              {/* <StandaloneSearchBox onLoad={onLoadB} onPlacesChanged={onPlacesChangedB}>
                <input className="addressField" placeholder="Digite o endereço final" />
              </StandaloneSearchBox> */}
              <button onClick={traceRoute} className="btn btn-primary btn-sm text-uppercase">
                Traçar rota
              </button>
            </div>

            {/* {!pointA && !pointB && (
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
            )} */}
            {!pointA && (
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
            )}

            {!response && pointA && <Marker position={pointA} />}
            {/* {!response && pointB && <Marker position={pointB} />} */}

            {origin && destination && (
              <DirectionsService options={directionsServiceOptions} callback={directionsCallback} />
            )}

            {response && directionsRendererOptions && (
              <DirectionsRenderer options={directionsRendererOptions} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      <Rodape />
      <Helmet>
        <title>Nossa Esquipe - {process.env.REACT_APP_TITLE}</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="Instituto Yofi conta com equipe qualifica para melhor lhe atender."
        />
      </Helmet>
    </>
  );
};

export default Ibitinga;
