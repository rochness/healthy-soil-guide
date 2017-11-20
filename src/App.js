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
import Home from './components/Home';
import Guide from './containers/Guide';
import Content from './containers/Content';
import MethodologyContent from "./components/MethodologyContent";
import ApproachContent from "./components/ApproachContent";
import ParticipateContent from "./components/ParticipateContent";



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
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/">Home</Link>
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/guide">Soil Guide</Link>
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/approach">Approach</Link>
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/methodology">Methodology</Link>
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/participate">Participate</Link>
        <a href="http://perennialfarming.org/donate/" target="_blank">Donate</a>
        {/*<Link to="/donate">Donate</Link>*/}
        <Link onClick={ this.handleCloseNavClick.bind(this) } to="/faq">FAQ</Link>
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
    <Route exact path='/' component={ Home } />
    <Route path='/guide' component={ Guide } />
    <Route path='/about' component={ About } />
    <Route path='/approach' component={ Approach } />
    <Route path='/methodology' component={ Methodology } />
    <Route path='/participate' component={ ParticipateContent } />
    <Route path='/donate' component={ Donate } />
    <Route path='/faq' component={ Faq } />
  </Switch>
)

const About = () => ( <Content title="About"/> )
const Approach = () => ( <Content title="Approach" content={ ApproachContent }/> )
const Methodology = () => ( <Content title="Methodology" content={ MethodologyContent }/> )
const Participate = () => ( <Content title="Participate" content={ ParticipateContent }/> )
const Donate = () => ( <Content title="Donate"/> )
const Faq = () => ( <Content title="FAQ"/> )

export default App;
