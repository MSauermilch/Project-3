import React from 'react';
import './style.css';
//will need to import map lat and lng

export function Map(props) {
    return (
        <div>
            <div id="map"></div>
        </div>
    );
  }

  export default Map;
// props- pass in the lat and lng