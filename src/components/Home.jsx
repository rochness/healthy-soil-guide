import React, { Component } from 'react';

class Home extends Component {

  render() {
    const videoStyles = {
      margin: "0px",
      width: "100%",
      height: "590.062px;",
    };

    return (
      <div className="video-page">
        <div className="video-container">
          <iframe src="https://player.vimeo.com/video/245847326?autoplay=1&loop=1" width="640" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="video-buttons">
          <div className="video-buttons-container">
            <button>
              <a href="/#/guide">SKIP THE VIDEO ></a>
            </button>
          </div>
        </div>
      </div>
  );
    /*
    return (
      <div className="video-container">
        <video autoPlay loop style={ videoStyles }>
            <source type="video/mp4" src="/assets/Website Teaser_v1.mp4"/>
        </video>
        <div className="video-buttons">
          <div className="video-buttons-container">
            <button>
              <a href="/">WATCH THE FILM</a>
            </button>
            <button>
              <a href="#/guide">SEE THE GUIDE</a>
            </button>
          </div>
        </div>
      </div>
    ); */
  }
}

export default Home;
