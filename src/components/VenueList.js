import React, { Component } from 'react';
import Venue from './Venue';

class VenueList extends Component {
  render() {
    return (
      <ol className={`venueList`}>
        {this.props.venues &&
          this.props.venues.map((venue, index) => (
            <Venue key={index} {...venue} venueClick={this.props.venueClick} />
          ))}
      </ol>
    );
  }
}

export default VenueList;
