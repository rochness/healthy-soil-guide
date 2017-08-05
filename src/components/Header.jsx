import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3 className="left-header">A CHEF'S <br/> GUIDE TO</h3>
          <h1 className="right-header">HEALTHY SOIL</h1>
        </div>
      </div>
    );
  }
}

export default Header;