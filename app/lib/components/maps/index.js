import React from 'react';
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import mapStyles from 'assets/mapStyles.json';

const ContactsMap = props => (
  <GoogleMap
    defaultZoom={5}
    defaultOptions={{ styles: mapStyles }}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(ContactsMap));
