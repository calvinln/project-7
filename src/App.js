import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourSquare from './API/index-fourSQ';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: []
    };
    this.markerClick = this.markerClick.bind(this);
    this.closeAllMarkers = this.closeAllMarkers.bind(this);
  }

  closeAllMarkers() {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  }

  markerClick(marker) {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });
    let currentVenue = this.state.venues.find(venue => venue.id === marker.id);
    FourSquare.getURL(marker.id).then(result => {
      let updatedVenue = Object.assign(currentVenue, result.response.venue);
      this.setState({
        venues: Object.assign(this.state.venues, updatedVenue)
      });
      console.log(this.state.venues);
    });
  }

  componentDidMount() {
    console.log(FourSquare.getURL('search'));
    FourSquare.getURL('search').then(results => {
      const venues = results.response.venues;
      const markers = venues.map(venue => {
        return {
          location: venue.location,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      const center = results.response.geocode.feature.geometry.center;
      this.setState({ venues, markers, center });
    });
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} markerClick={this.markerClick} />
      </div>
    );
  }
}

export default App;
