import React, { Component } from 'react';
import VenueList from './VenueList';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this.searchVenue = this.searchVenue.bind(this);
  }

  searchVenue(q) {
    this.setState({ query: q.target.value });
    let displayMarkers = this.props.venues.map(venue => {
      let venueFound = venue.name
        .toLowerCase()
        .includes(q.target.value.toLowerCase());
      let marker = this.props.markers.find(marker => marker.id === venue.id);
      if (venueFound) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.setSuperState({ markers: displayMarkers });
  }

  render() {
    return (
      <div className={`sidebar`}>
        <input
          className={`inputField`}
          placeholder={`Search venue`}
          type={`search`}
          onChange={q => this.searchVenue(q)}
        />
        <VenueList {...this.props} />
      </div>
    );
  }
}

export default Sidebar;
