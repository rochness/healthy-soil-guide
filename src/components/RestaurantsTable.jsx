import React, { Component } from 'react';
import Reactable from "reactable";

class RestaurantsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tableContainer twelve columns">
        <div className="placeholder">
          <p> Coming soon... </p>
        </div>
      </div>
    );
  }
}

export default RestaurantsTable;