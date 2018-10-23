import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 33.651155, lng: -117.744094 }}
      center={props.center}
    >
      {/*Make sure markers exist and that we only create markers that are visible*/}
      {props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, index, array) => {
            const venueProps = props.venues.find(
              venue => venue.id === marker.id
            );
            return (
              <Marker
                key={index}
                position={{
                  lat: marker.location.lat,
                  lng: marker.location.lng
                }}
                onClick={() => props.markerClick(marker)}
                animation={
                  array.length === 1
                    ? window.google.maps.Animation.BOUNCE
                    : window.google.maps.Animation.DROP
                }
              >
                {marker.isOpen &&
                  venueProps.bestPhoto && (
                    <InfoWindow>
                      <React.Fragment>
                        <img
                          src={`${venueProps.bestPhoto.prefix}200x200${
                            venueProps.bestPhoto.suffix
                          }`}
                          alt={'venue image'}
                        />
                        <p>{venueProps.name}</p>
                        <p>{`Price: ${venueProps.price.message}`}</p>
                      </React.Fragment>
                    </InfoWindow>
                  )}
              </Marker>
            );
          })}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD4YaWAb_bndQH5G39TYBg1oXR5JkHHDuc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className={`map-container`} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
