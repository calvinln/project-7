import React, { Component } from 'react';
import VenueList from './VenueList';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this.searchVenue = this.searchVenue.bind(this);
    this.filterVenues = this.filterVenues.bind(this);
  }

  // filter the current venues to see which ones match the query
  filterVenues() {
    if (this.state.query.trim() !== '') {
      let selectVenues = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      return selectVenues;
    } else {
      return this.props.venues;
    }
  }

  // search current venues to see which matches the query and set respective markers to show and hide the others
  searchVenue(q) {
    this.setState({ query: q.target.value });
    let selectMarkers = this.props.venues.map(venue => {
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
    this.props.setSuperState({ markers: selectMarkers });
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
        <VenueList {...this.props} venues={this.filterVenues()} />
      </div>
    );
  }
}

export default Sidebar;
