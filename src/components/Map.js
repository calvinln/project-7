import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 33.651155, lng: -117.744094 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.651155, lng: -117.744094 }} />
      )}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD4YaWAb_bndQH5G39TYBg1oXR5JkHHDuc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `1020px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
