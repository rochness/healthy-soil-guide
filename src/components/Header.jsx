import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-title-container">
            <h1 className="mobile-only">
            <span className="white"> A CHEF'S GUIDE<br/></span>
            <span className="light-green">TO HEALTHY SOIL</span>
            </h1>
            <h5 className="left-header">A CHEF'S <br/> GUIDE TO</h5>
            <h1 className="right-header">HEALTHY SOIL</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;