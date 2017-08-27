import React, { Component } from 'react';
import Reactable from "reactable";
import TwoColumnInfoSection from '../components/TwoColumnInfoSection';
import FarmsTableContainer from "../components/FarmsTableContainer";
import RanchesTableContainer from "../components/RanchesTableContainer";
import RestaurantsTable from "../components/RestaurantsTable";


class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTable: <FarmsTableContainer/>,
      selectedTabName: "farms",
    };
  }

  guideInfoDescription() {
    return (
      <div className="guide-description">
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
    const farmLegend = [
      (<h5 key={1} className="legend-color-1"> NO-TILL </h5>),
      (<h5 key={2} className="legend-color-2">COVER CROPPING</h5>),
      (<h5 key={3} className="legend-color-3">CROP ROTATION/<br/>POLYCULTURE</h5>),
      (<h5 key={4} className="legend-color-4">COMPOSTING/<br/>GRAZING PROGRAM</h5>),
      (<h5 key={5} className="legend-color-5">INTEGRATION OF<br/>PERENNIAL CROPS,<br/>TREES, HEADGEGROWS</h5>),
    ];

    const ranchLegend = [
      (<h5 key={1} className="legend-color-1"> NO-TILL </h5>),
      (<h5 key={2} className="legend-color-2">ADAPTIVE MULTI <br/> PADDOCK GRAZING</h5>),
      (<h5 key={3} className="legend-color-3">COMPOST APPLICATION</h5>),
      (<h5 key={4} className="legend-color-4">ENCOURAGING NATIVE,<br/>PERENNIAL FORAGE</h5>),
      (<h5 key={5} className="legend-color-5">SILVOPASTURE<br/>HEADGEGROWS</h5>),
    ];

    const legendMap = {
      farms: farmLegend,
      ranches: ranchLegend,
      restaurants: farmLegend,
    };

    return (
      <div>
        <div className="legend-content">
          { legendMap[this.state.selectedTabName] }
        </div>
        <img className="legend-content"src="/assets/artichoke.png" alt=""/>
      </div>
    );
  }

  renderGuideInfo() {
    return (
      <TwoColumnInfoSection
        section1 = { this.guideInfoDescription() }
        section2 = { this.guideInfoLegend() }
      />
    );
  }

  onTabClick(tabName) {
    const tabsToComponents = {
      farms: <FarmsTableContainer/>,
      ranches: <RanchesTableContainer/>,
      restaurants: <RestaurantsTable/>,
    }
    this.setState({
      selectedTable: tabsToComponents[tabName],
      selectedTabName: tabName,
    });
  }

  tableTabs() {
    const tabNames = ["farms", "ranches", "restaurants"];
    return tabNames.map((tabName, index) => {
      return (
        <div key={index}
          className={"table-type-tab" + (this.state.selectedTabName === tabName ? " selected" : "")}
          onClick={ this.onTabClick.bind(this, tabName) }>
          <p>{ tabName.toUpperCase()} </p>
        </div>
      );
    });
  }

  renderGuideTable() {
    const Table = Reactable.Table;

    return (
        <div class="row">
          <div className="tabs-container twelve columns">
            { this.tableTabs() }
          </div>
          { this.state.selectedTable }
      </div>
    );
  }

  render() {
    return (
      <div className="container">
      { this.renderGuideInfo() }
      { this.renderGuideTable() }
      </div>
    );
  }
}

export default Guide;