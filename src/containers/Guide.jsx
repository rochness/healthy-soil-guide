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
      //selectedTable: <RestaurantsTable/>,
      //selectedTabName: "restaurants",
      selectedTable: <FarmsTableContainer/>,
      selectedTabName: "farms",
    };
  }

  guideInfoDescription() {
    const ranchDescription = (
      <p>This Healthy Soil Guide aims to encourage chefs and
      consumers to buy from ranchers using sustainable practices.
      Healthy soil enhances flavor, nutrition, soil’s water-holding
      capacity, and—critically—a ranch’s ability to draw down
      carbon dioxide and mitigate global warming. For the sake
      of simplicity, we have foregrounded a single metric: Soil
      Organic Matter. This highlights the work of ranches that are
      doing the hard work of regenerative agriculture: small
      organic ranchers as well as larger operations that work
      to maximize soil health even if they use some chemical
      fertilizer. Click on each ranch's entry for more information.
      </p>
    );

    const farmDescription = (
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
    );

    const restaurantDescription = (
      <p>This Healthy Soil Guide is a concerted effort by
      chefs to improve the food system by supporting
      healthy soil. Organic Matter in soil Healthy soil
      enhances flavor, nutrition, water-holding capacity,
      and—critically—a soil’s ability to draw down
      carbon dioxide and reverse global warming.
      Increasing global soil organic matter by 2% would
      bring greenhouse gases below 350 ppm and the
      participating restaurants want to help spread thiis
      message through delicious food.
      </p>
    );

    const descriptionMap = {
      farms: farmDescription,
      ranches: ranchDescription,
      restaurants: restaurantDescription,
    };
    return (
      <div className="guide-description">
        <h3> Healthy Soil Means Better Food </h3>
        { descriptionMap[this.state.selectedTabName] }
      </div>
    );
  }

  guideInfoLegend () {
    const restaurantLegend = [
      (<h5 key={1} className="legend-color-1"> SOURCES PRIMARILY<br/>THROUGH FARMS<br/>WITH HEALTHY SOIL</h5>),
      (<h5 key={2} className="legend-color-2">SOURCES PRIMARILY<br/>PASTURE RAISED OR<br/>100% GRASS FED MEAT</h5>),
      (<h5 key={3} className="legend-color-3">COMPOSTS</h5>),
      //(<h5 key={4} className="legend-color-4">COMPOSTS (YES IT'S<br/>THAT IMPORTANT</h5>),
      (<h5 key={5} className="legend-color-5">GROWS FOOD OR<br/>WORKS DIRECTLY<br/>WITH A PRODUCER</h5>),
    ];

    const farmLegend = [
      (<h5 key={1} className="legend-color-1"> NO-TILL </h5>),
      (<h5 key={2} className="legend-color-2">COVER CROPPING</h5>),
      (<h5 key={3} className="legend-color-3">CROP ROTATION/<br/>POLYCULTURE</h5>),
      (<h5 key={4} className="legend-color-4">COMPOSTING/<br/>GRAZING PROGRAM</h5>),
      (<h5 key={5} className="legend-color-5">INTEGRATION OF<br/>PERENNIAL CROPS,<br/>TREES, HEDGEGROWS</h5>),
    ];

    const ranchLegend = [
      (<h5 key={1} className="legend-color-1"> NO-TILL </h5>),
      (<h5 key={2} className="legend-color-2">ADAPTIVE MULTI <br/> PADDOCK GRAZING</h5>),
      (<h5 key={3} className="legend-color-3">COMPOST APPLICATION</h5>),
      (<h5 key={4} className="legend-color-4">ENCOURAGING NATIVE/<br/>PERENNIAL FORAGE</h5>),
      (<h5 key={5} className="legend-color-5">SILVOPASTURE/<br/>HEDGEGROWS</h5>),
    ];

    const legendMap = {
      farms: farmLegend,
      ranches: ranchLegend,
      restaurants: restaurantLegend,
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
      farms: <FarmsTableContainer dataType="farms"/>,
      ranches: <RanchesTableContainer dataType="ranches"/>,
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
        { this.state.selectedTabName === "restaurants" ? null :
          <div className="example-text-container twelve columns">
            EXAMPLE DATA (we are still in the process of compiling data)
          </div>
        }
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