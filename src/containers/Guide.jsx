import React, { Component } from 'react';
import GuideInfo from './GuideInfo';
import GuideTableContainer from './GuideTableContainer';


class Guide extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="guideTableContainer">
        <GuideInfo/>
        <GuideTableContainer/>
        </div>
      </div>
    );
  }
}

export default Guide;