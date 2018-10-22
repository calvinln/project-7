import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourSquare from './API/index-fourSQ';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: []
    };
    this.markerClick = this.markerClick.bind(this);
    this.closeMarkers = this.closeMarkers.bind(this);
    this.venueClick = this.venueClick.bind(this);
    this.setSuperState = this.setSuperState.bind(this);
  }

  setSuperState(state) {
    this.setState(state);
  }

  closeMarkers() {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  }

  markerClick(marker) {
    this.closeMarkers();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });
    let currentVenue = this.state.venues.find(venue => venue.id === marker.id);
    FourSquare.getURL(marker.id).then(result => {
      let updatedVenue = Object.assign(currentVenue, result.response.venue);
      this.setState({
        venues: Object.assign(this.state.venues, updatedVenue)
      });
      // console.log(this.state.venues);
    });
  }

  venueClick(venue) {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.markerClick(marker);
  }

  componentDidMount() {
    // console.log(FourSquare.getURL('search'));
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
        <Sidebar
          {...this.state}
          venueClick={this.venueClick}
          setSuperState={this.setSuperState}
        />
        <Map {...this.state} markerClick={this.markerClick} />
      </div>
    );
  }
}

export default App;
