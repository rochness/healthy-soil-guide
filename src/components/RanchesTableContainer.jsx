import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsAndRanchesTable from "./FarmsAndRanchesTable";
import fire from "../data/fire.js";
//import { ranchData } from "../data/data.js";

class RanchesTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [],
      dataType: this.props.dataType,
    }
  }

  componentWillMount() {
    const { dataType } = this.state;
    let data = [];
    let headers = [];
    let dataQuery = fire.database().ref(dataType).orderByKey();
     dataQuery.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          data.push(childSnapshot.val());
        });
        this.setState({data: data});
      });
    let headersQuery = fire.database().ref(`${dataType}_headers`).orderByKey();
     headersQuery.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          headers.push(childSnapshot.val());
        });
        this.setState({headers: headers});
      })
  }

  render() {
    if( this.state.data.length > 0 && this.state.headers.length > 0 ) {
      return <FarmsAndRanchesTable
        rowData= { this.state.data }
        headers={ this.state.headers }
      />;
    }
    return null;
  }
}

export default RanchesTableContainer;