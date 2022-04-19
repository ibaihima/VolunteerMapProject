import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

 
const containerStyle = {
  width: '35%',
  height: '600px'
};
 
const center = {
  lat: 40.76335,
  lng: -73.97778
};
 

 
 
 
 
 
function Map({mapCharities}) {
 
 
 
 
  return (
   
    <LoadScript
      googleMapsApiKey="AIzaSyAqSZSTEoQOQoh0Dh2IzVXgG0kA1l7agWQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >  
    {mapCharities}
    <></>
      </GoogleMap>
    </LoadScript>
 
   
  )
}
 
export default Map;

