import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Guide from './containers/Guide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Guide/>
        <Footer/>
      </div>
    );
  }
}

export default App;
