import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const actionButtons = ["PARTICIPATE", "FEEDBACK", "DONATE"].map((action, i) =>
      {
        let actionContent;
        if( action === "DONATE" ) {
          actionContent = (
            <a
              className="donate-link"
              href="http://perennialfarming.org/donate/"
              target="_blank">DONATE
            </a>);
        } else {
          actionContent = action;
        }

        return (
          <button className={ `action-button button-${i+1} four columns` }>{ actionContent } </button>
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