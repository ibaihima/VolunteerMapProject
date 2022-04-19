import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '35%',
  height: '600px'
};

const center = {
  lat: 40.76335,
  lng: -73.97778
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAqSZSTEoQOQoh0Dh2IzVXgG0kA1l7agWQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;