import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import './mobile.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Guide from './containers/Guide';
import Content from './containers/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({menuOpen: true});
  }

  handleCloseNavClick() {
    this.setState({menuOpen: false});
  }

  renderSideNav() {
    const menuOpenClassName = this.state.menuOpen ? "menu-open" : "menu-close";
    const sideNav = (
      <div className={`sidenav ${menuOpenClassName}`}>
        <a href="javascript:void(0)" className="closebtn"
          onClick={ this.handleCloseNavClick.bind(this) }>
            &times;
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/approach">Approach</Link>
        <Link to="/methodology">Methodology</Link>
        <Link to="/participate">Participate</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    );
    return sideNav;
  }

  renderMenuIcon() {
    return (
      <div className="menu-icon-container">
        <div className="menu-icon"
          onClick={ this.handleMenuClick.bind(this) }>
          <div className="bar"/>
          <div className="bar"/>
          <div className="bar"/>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        { this.renderMenuIcon() }
        { this.renderSideNav() }
        <div className={ this.state.menuOpen ? "shifted-container" : "not-shifted" }>
          <Header/>
          <Main/>
        </div>
        <Footer/>
      </div>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={ Guide } />
    <Route path='/about' component={ About } />
    <Route path='/approach' component={ Approach } />
    <Route path='/methodology' component={ Methodology } />
    <Route path='/participate' component={ Participate } />
    <Route path='/donate' component={ Donate } />
    <Route path='/faq' component={ Faq } />
  </Switch>
)

const About = () => ( <Content title="About"/> )
const Approach = () => ( <Content title="Approach"/> )
const Methodology = () => ( <Content title="Methodology"/> )
const Participate = () => ( <Content title="Participate"/> )
const Donate = () => ( <Content title="Donate"/> )
const Faq = () => ( <Content title="FAQ"/> )

export default App;
