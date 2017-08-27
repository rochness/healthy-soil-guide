import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3> { this.props.title } </h3>
        <p> This page is still under construction </p>
        <div className="placeholder"/>
      </div>
    );
  }
}

export default Content;