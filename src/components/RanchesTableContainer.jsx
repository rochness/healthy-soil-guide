import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsAndRanchesTable from "./FarmsAndRanchesTable";

class RanchesTableContainer extends Component {
  constructor(props) {
    super(props);
    const name = "Ranch";
    const zipCode = 90000;
    const comparedToRegion = 5.5;
    const improvement = 2.2;
    const bestPractice = "blah";
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
      return {
        name: name.concat(num),
        zipCode: zipCode + num,
        comparedToRegion: (comparedToRegion + num),
        improvement: (improvement - num),
        bestPractice: bestPractice.concat(num),
        };
      }),
    };
  }


  render() {
    return <FarmsAndRanchesTable rowData= { this.state.data }/>;
  }
}

export default RanchesTableContainer;