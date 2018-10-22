import React, { Component } from 'react';

class Venue extends Component {
  render() {
    return (
      <li className={'venue'} onClick={() => this.props.venueClick(this.props)}>
        {this.props.name}
      </li>
    );
  }
}

export default Venue;
