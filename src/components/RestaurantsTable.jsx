import React, { Component } from 'react';
import Reactable from "reactable";
import restaurantData from "../data/restaurants.js";
import fire from "../data/fire.js";

const LogoItem = (props) => {
  return (
    <div className="logo-container">
      <a target="_blank" href={ props.website_url }>
        <img className="restaurant-logo"
          src={ props.logo_url }
        />
      </a>
    </div>
  );
};

class RestaurantsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentWillMount() {
    let restaurants = [];
    let dataQuery = fire.database().ref("restaurants").orderByKey();
     dataQuery.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          restaurants.push(childSnapshot.val());
        });
        this.setState({restaurants: restaurants});
      });
  }

  renderLogoRow() {
    let numberOfRows = Math.ceil(this.state.restaurants.length / 3);
    let rows = [];
    for (let i=0; i < numberOfRows; i++) {
      let startingIndex = 3 * i;
      let endingIndex = startingIndex + 3;
      let subset = this.state.restaurants.slice(startingIndex, endingIndex);
      let logos = subset.map((restaurant) => <LogoItem {...restaurant }/>);
      rows.push((
        <div className="restaurant-logo-row">
          { logos }
        </div>
      ));
    }
    return rows;
  }

  render() {
    if (this.state.restaurants.length > 0) {
      return (
        <div className="tableContainer restaurant-container">
          { this.renderLogoRow() }
        </div>
      );
    }
    return null;
  }
}

export default RestaurantsTable;
