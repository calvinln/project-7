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
  }

  componentDidMount() {
    console.log(FourSquare.getURL('search'));
    FourSquare.getURL('search').then(results => {
      const venues = results.response.venues;
      const markers = venues.map(venue => venue.location);
      const center = results.response.geocode.feature.geometry.center;
      this.setState({ venues, markers, center });
    });
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} />
      </div>
    );
  }
}

export default App;
