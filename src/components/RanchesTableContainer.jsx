import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsAndRanchesTable from "./FarmsAndRanchesTable";
import { ranchData } from "../data/data.js";

class RanchesTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ranchData,
    };
  }


  render() {
    return <FarmsAndRanchesTable rowData= { this.state.data }/>;
  }
}

export default RanchesTableContainer;