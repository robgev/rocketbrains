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
    defaultZoom={18}
    defaultOptions={{ styles: mapStyles }}
    defaultCenter={{ lat: 40.1925852, lng: 44.4990886 }}
  >
    <Marker
      icon={{
        scaledSize: {width: 70, height: 70},
        url: "/images/pin.svg"
      }}
      position={{ lat: 40.1925852, lng: 44.4990886 }}
    />
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(ContactsMap));
