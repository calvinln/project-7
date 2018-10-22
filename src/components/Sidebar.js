import React, { Component } from 'react';
import VenueList from './VenueList';

class Sidebar extends Component {
  render() {
    return (
      <div className={`sidebar`}>
        <input
          className={`inputField`}
          placeholder={`Search venue`}
          type={`search`}
        />
        <VenueList {...this.props} />
      </div>
    );
  }
}

export default Sidebar;
