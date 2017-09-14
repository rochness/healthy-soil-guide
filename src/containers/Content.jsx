import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    console.log("props ", props)
  }

  render() {
    const placeHolder = (
      <div className="placeholder">
        <p> This page is still under construction </p>
      </div>
    );
    return (
      <div className="container">
        <h3 className="contentPageTitle"> { this.props.title } </h3>
        { this.props.content ? this.props.content() : placeHolder }
      </div>
    );
  }
}

export default Content;