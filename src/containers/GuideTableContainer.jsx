import React, { Component } from 'react';
import Reactable from "reactable";
import FarmsTableContainer from "../components/FarmsTableContainer";
import RanchesTableContainer from "../components/RanchesTableContainer";
import RestaurantsTable from "../components/RestaurantsTable";

class GuideTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: <FarmsTableContainer/>,
    };
  }

  onTabClick(tabName) {
    const tabsToComponents = {
      farms: <FarmsTableContainer/>,
      ranches: <RanchesTableContainer/>,
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