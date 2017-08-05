import React, { Component } from 'react';
import TwoColumnInfoSection from '../components/TwoColumnInfoSection';

class GuideInfo extends Component {
  guideInfoDescription() {
    return (
      <div>
        <h3> Healthy Soil Means Better Food </h3>
        <p>This Healthy Soil Guide aims to encourage chefs and
        consumers to buy from farmers using sustainable practices.
        Healthy soil enhances flavor, nutrition, soil’s water-holding
        capacity, and—critically—a farm’s ability to draw down
        carbon dioxide and mitigate global warming. For the sake
        of simplicity, we have foregrounded a single metric: Soil
        Organic Matter. This highlights the work of farms that are
        doing the hard work of regenerative agriculture: small
        organic farmers as well as larger operations that work
        to maximize soil health even if they use some chemical
        fertilizer. Click on each farm’s entry for more information.
        </p>
      </div>
    );
  }

  guideInfoLegend () {
    return (
      <div>
        <div className="legend-content">
          <h5>NO-TILL</h5>
          <h5>COVER CROPPING</h5>
          <h5>CROP ROTATION/<br/>POLYCULTURE</h5>
          <h5>COMPOSTING/<br/>GRAZING PROGRAM</h5>
          <h5>INTEGRATION OF<br/>PERENNIAL CROPS,<br/>TREES, HEADGEGROWS</h5>
        </div>
        <img className="legend-content"src="/assets/artichoke.png" alt="" width="400px"/>
      </div>
    );
  }

  render() {
    return (
      <TwoColumnInfoSection
        section1 = { this.guideInfoDescription() }
        section2 = { this.guideInfoLegend() }
      />
    );
  }
}

export default GuideInfo;