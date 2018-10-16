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
      if (props.isMarkerShown)
      {
        <>
          <Marker position={{ lat: 33.651155, lng: -117.744094 }} />
          <Marker position={{ lat: 33.652027, lng: -117.743497 }} />
          <Marker position={{ lat: 33.650421, lng: -117.743804 }} />
          <Marker position={{ lat: 33.650431, lng: -117.744997 }} />
          <Marker position={{ lat: 33.651496, lng: -117.745015 }} />
        </>
      }
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
