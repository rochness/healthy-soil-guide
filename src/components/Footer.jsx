import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleParticipateClick = () => {
    browserHistory.push('/participate');
  }

  render() {
    const actionButtons = ["LEARN MORE", "PARTICIPATE", "DONATE"].map((action, i) =>
      {
        let actionContent;
        if( action === "DONATE" ) {
          actionContent = (
            <a
              className="donate-link"
              href="http://perennialfarming.org/donate/"
              target="_blank">DONATE
            </a>);
        } else if( action === "PARTICIPATE") {
          actionContent = (<Link to="/participate">{ action }</Link>);
        } else {
          actionContent = (
            <a
              className="donate-link"
              href="https://soilsolution.org/"
              target="_blank">
              { action }
            </a>);
        }

        return (
          <button className={ `action-button button-${i+1} four columns` }>
            { actionContent }
          </button>
        );
      });

      const createdByOrgs = [
        "The Perrennial Farming Initiative",
        "SNAPP: Managing Soil Carbon Working Group",
        "RSF Social Finance",
        "Soil Solutions",
        "Pasture Map",
        "The Sustainable Food Lab",
        "Eat REAL",
        "The Regenerative Agriculture Foundation",
        "F.E.E.D Sonoma",
        "The American Farmland Trust",
      ].map((org) => {
        return <p>{ org }</p>;
      });

      const researchPartners = [
        "Berkeley Food Institute",
        "Community Agroecology Network",
        "CUESA",
        "David Montgomery",
        "Food Tank/ Danielle Nierenberg",
        "Jeff Westman (formerly Marin Organics)",
        "John Wick (Marin Carbon Project)",
        "Judith Schwartz",
        "Kilimo Katika Capay/ Barbara Herren",
        "Kiss the Ground",
        "Kitchen Table Advisors",
        "Land Stewardship Project",
        "Millennium Institute/ Hans Herren",
        "Northern Plains Resource Council",
      ].map((partner) => {
        return <p>{ partner }</p>;
      })

    return (
      <div className="footer container">
        <div className="action-buttons-container row">
          { actionButtons }
        </div>
        <div className="partners-container row">
          <div className="created-by five columns">
            <h5>Created by:</h5>
            { createdByOrgs }
          </div>
          <div className="research-partners seven columns">
            <h5>Research Partners:</h5>
            <div className="row">
              <div className="six columns">
                { researchPartners.slice(0, Math.floor(researchPartners.length/2)) }
              </div>
              <div className="six columns">
                { researchPartners.slice(Math.floor(researchPartners.length/2), researchPartners.length) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
