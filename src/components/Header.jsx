import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-title-container">
            <h5 className="left-header">A CHEF'S <br/> GUIDE TO</h5>
            <h1 className="right-header">HEALTHY SOIL</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;