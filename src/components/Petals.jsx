import React, { Component } from 'react';

class Petals extends Component {
  constructor(props) {
    super(props);
  }

  renderPetal1(){
    const yes = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="140.951px" height="71.726px" enable-background="new 0 0 140.951 71.726"
        space="preserve">
      <g>
        <path fill="#D6E6A0" d="M0.823,45.654C6.27,75.914,44.701,71.5,44.701,71.5s0.917-16.579-2.878-36.096
          c-3.793-19.516-10.75-35.25-10.75-35.25S-5.927,8.154,0.823,45.654z"/>
        <polygon fill="#D6E6A0" points="44.701,71.5 30.951,0 140.951,0  "/>
      </g>
      </svg>
    );

    const no = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="140.951px" height="71.727px" viewBox="0 0 140.951 71.727" enable-background="new 0 0 140.951 71.727"
         space="preserve">
      <g>
        <path fill="#DBDBD9" d="M0.823,45.654C6.27,75.914,44.701,71.5,44.701,71.5s0.917-16.579-2.878-36.097
          c-3.793-19.516-10.75-35.25-10.75-35.25S-5.927,8.154,0.823,45.654z"/>
        <polygon fill="#DBDBD9" points="44.701,71.5 30.951,0 140.951,0  "/>
      </g>
      <g>
        <path fill="#FFFFFF" d="M2.976,45.095C9.476,71.726,44.701,71.5,44.701,71.5s-0.083-16.847-3.878-36.362
          C37.03,15.622,33.476,2.865,33.476,2.865S-2.358,7.53,2.976,45.095z"/>
        <polygon fill="#FFFFFF" points="44.701,71.5 33.476,2.863 140.951,0  "/>
      </g>
      </svg>
    );

    return this.props.bestPracticesData.bestPractice1 ? yes : no;
  }

  renderPetal2() {
    const yes = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="200" height="150" enable-background="new 0 0 105.971 129.941"
         space="preserve">
        <g transform="translate(35,0)">
          <path fill="#9BD19B" enable-background="new    " d="M14.646,122.75c26,20.75,54.25-10,54.25-10s-11.697-8.44-26-22.25
            c-14.301-13.811-33.176-19-33.176-19S-15.136,98.981,14.646,122.75z"/>
          <polygon fill="#9BD19B" points="68.896,112.75 9.721,71.5 105.971,0  "/>
        </g>
      </svg>
    );

    const no = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="200" height="150" enable-background="new 0 0 105.971 129.941"
         space="preserve">
        <g transform="translate(35,0)">
          <g>
            <path fill="#DBDBD9" d="M9.72,71.5c0,0,18.875,5.189,33.176,19c14.304,13.811,26,22.25,26,22.25s-28.25,30.75-54.25,10
              C-15.135,98.981,9.72,71.5,9.72,71.5z"/>
            <polygon fill="#DBDBD9" points="105.97,0 9.72,71.5 68.896,112.75  "/>
          </g>
          <path fill="#FFFFFF" d="M12.22,75c0,0,19.964,1.91,34.265,15.721c14.304,13.811,23.25,21,23.25,21s-23,30-50,12.25
            C-10.047,100.202,12.22,75,12.22,75z"/>
          <polygon fill="#FFFFFF" points="105.97,0 12.235,74.97 69.735,111.72 "/>
        </g>
      </svg>
    );
    return this.props.bestPracticesData.bestPractice2 ? yes : no;
  }

  renderPetal3() {
    const yes = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="200" height="150.312px" viewBox="0 0 75.061 150.312" enable-background="new 0 0 75.061 150.312"
         space="preserve">
        <g transform="translate(41,0)">
          <polygon fill="#57AB47" points="0,112.75 75.061,112.75 37.311,0   "/>
          <path fill="#57AB47" d="M75.061,112.75c0,0-2.829,37.89-37.593,37.561C4.686,150,0,112.843,0,112.843s20.118-9.343,40.811-9.343
            C61.503,103.5,75.061,112.75,75.061,112.75z"/>
        </g>
      </svg>
    );

    const no = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="200" height="150.312px" viewBox="0 0 75.061 150.312" enable-background="new 0 0 75.061 150.312"
         space="preserve">
        <g transform="translate(41,0)">
          <g>
            <polygon fill="#DBDBD9" points="0,112.75 75.061,112.75 37.311,0   "/>
            <path fill="#DBDBD9" d="M75.061,112.75c0,0-2.829,37.891-37.593,37.562C4.686,150,0,112.843,0,112.843s20.118-9.343,40.811-9.343
              S75.061,112.75,75.061,112.75z"/>
          </g>
          <polygon fill="#FFFFFF" points="2.864,113.157 72.697,113.157 37.061,1 "/>
          <path fill="#FFFFFF" d="M72.697,113.157c0,0-1.833,34.167-34.833,33.833c-31.5-0.166-35-33.833-35-33.833s17.255-9.657,37.947-9.657
            S72.697,113.157,72.697,113.157z"/>
        </g>
      </svg>
    );

    return this.props.bestPracticesData.bestPractice3 ? yes : no;
  }

  renderPetal4() {
    const yes = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="300" height="129.941px" viewBox="0 0 105.971 129.941" enable-background="new 0 0 105.971 129.941"
         space="preserve">
        <g transform="translate(43,0)">
          <path fill="#239C81" enable-background="new    " d="M91.324,122.75c-26,20.75-54.25-10-54.25-10s11.697-8.44,26-22.25
            c14.301-13.811,33.176-19,33.176-19S121.106,98.981,91.324,122.75z"/>
          <polygon fill="#239C81" points="37.074,112.75 96.25,71.5 0,0  "/>
        </g>
      </svg>
    );

    const no = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="300" height="129.941px" viewBox="0 0 105.971 129.941" enable-background="new 0 0 105.971 129.941"
         space="preserve">
        <g transform="translate(43,0)">
          <g>
            <path fill="#DBDBD9" d="M91.324,122.75c-26,20.75-54.25-10-54.25-10s11.696-8.439,26-22.25c14.301-13.811,33.176-19,33.176-19
              S121.106,98.981,91.324,122.75z"/>
            <polygon fill="#DBDBD9" points="37.074,112.75 96.25,71.5 0,0  "/>
          </g>
          <path fill="#FFFFFF" d="M86.236,123.97c-27,17.75-50-12.25-50-12.25s8.946-7.189,23.25-21C73.786,76.91,93.75,75,93.75,75
            S116.017,100.202,86.236,123.97z"/>
          <polygon fill="#FFFFFF" points="36.236,111.72 93.736,74.97 0,0 "/>
        </g>
      </svg>
    )
    return this.props.bestPracticesData.bestPractice4 ? yes : no;
  }

  renderPetal5() {
    const yes = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="300" height="71.726px" viewBox="0 0 140.951 71.726" enable-background="new 0 0 140.951 71.726"
         space="preserve">
        <g transform="translate(60,0)">
          <path fill="#497F3B" d="M140.129,45.654C134.682,75.914,96.25,71.5,96.25,71.5s-0.916-16.579,2.879-36.096
            c3.793-19.516,10.75-35.25,10.75-35.25S146.879,8.154,140.129,45.654z"/>
          <polygon fill="#497F3B" points="96.25,71.5 110,0 0,0  "/>
        </g>
      </svg>
    );

    const no = (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="300" height="71.727px" viewBox="0 0 140.951 71.727" enable-background="new 0 0 140.951 71.727"
         space="preserve">
        <g transform="translate(60,0)">
          <g>
            <path fill="#DBDBD9" d="M109.878,0.154c0,0-6.957,15.734-10.75,35.25C95.333,54.921,96.25,71.5,96.25,71.5
              s38.431,4.414,43.878-25.846C146.878,8.154,109.878,0.154,109.878,0.154z"/>
            <polygon fill="#DBDBD9" points="0,0 110,0 96.25,71.5  "/>
          </g>
          <g>
            <path fill="#FFFFFF" d="M107.476,2.863c0,0-3.554,12.759-7.348,32.274C96.333,54.654,96.25,71.5,96.25,71.5
              s35.226,0.227,41.726-26.404C143.31,7.53,107.476,2.863,107.476,2.863z"/>
            <polygon fill="#FFFFFF" points="0,0 107.476,2.863 96.25,71.5  "/>
          </g>
        </g>
      </svg>
    )

    return this.props.bestPracticesData.bestPractice5 ? yes : no;
  }

  render() {
    return (
      <svg width="125" height="50" viewBox="30 0 250 150">
        { this.renderPetal1() }
        { this.renderPetal2() }
        { this.renderPetal3() }
        { this.renderPetal4() }
        { this.renderPetal5() }
      </svg>
    );
  }
}

export default Petals;