import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsAndRanchesTable from "./FarmsAndRanchesTable";
import { farmData } from "../data/data.js";

class FarmsTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: farmData,
    }
  }

  render() {
    return <FarmsAndRanchesTable rowData={ this.state.data }/>;
  }
}

export default FarmsTableContainer;