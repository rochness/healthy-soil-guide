import React, { Component } from 'react';

class Home extends Component {

  render() {
    const videoStyles = {
      margin: "0px",
      width: "100%",
      height: "590.062px;",
    };

    return (
      <div className="video-container">
        <video autoPlay loop style={ videoStyles }>
            <source type="video/webm" src="https://www.plenty.ag/wp-content/uploads/2017/07/Team-Video_3.webm"/>
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
    );
  }
}

export default Home;