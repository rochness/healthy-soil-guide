import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsTable from "../components/FarmsTable";
import RanchesTable from "../components/RanchesTable";
import RestaurantsTable from "../components/RestaurantsTable";

class GuideTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: <FarmsTable/>,
    };
  }

  onTabClick(tabName) {
    const tabsToComponents = {
      farms: <FarmsTable/>,
      ranches: <RanchesTable/>,
      restaurants: <RestaurantsTable/>,
    }
    this.setState({selectedTab: tabsToComponents[tabName]});
  }

  tableTabs() {
    const tabNames = ["farms", "ranches", "restaurants"];
    return tabNames.map((tabName, index) => {
      return <div key={index} className="table-type-tab"
        onClick={ this.onTabClick.bind(this, tabName) }
      >
      <h4>{ tabName.toUpperCase()} </h4>
      </div>
    });
  }

  render() {
    const Table = Reactable.Table;

    return (
        <div>
          <div className="tabs-container">
            { this.tableTabs() }
          </div>
          { this.state.selectedTab }
      </div>
    );
  }
}

export default GuideTableContainer;