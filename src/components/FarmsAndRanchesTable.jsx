import React, { Component } from 'react';
import Reactable from "reactable";
import Petals from "./Petals";
import { farmData } from "../data/data.js";

class FarmsAndRanchesTable extends Component {
  constructor(props) {
    super(props);
  }

  buildTableHeader() {
    const fieldToHeader = {
      name: "Name",
      zipCode: "Zip Code",
      comparedToRegion: "Organic Matter Compared to Region",
      improvement: "Organic Matter Improvement",
      bestPractice: "Best Practices"
    };

    const Thead = Reactable.Thead;
    const Th = Reactable.Th;

    const headers = Object.keys(fieldToHeader).map((field) => {
      return (
        <Th className="tableHeader tableCell" column={ field }>
          <strong className="table-header">
            { fieldToHeader[field] }
          </strong>
        </Th>
      );
    });

    return (
      <Thead>
        { headers }
      </Thead>
    );
  }

  renderPercentageData(num) {
    const plusSign = num > 0 ? "+" : "";
    return plusSign + num.toFixed(1) + "%";
  }

  hasRegionStar(num) {
    return num > 3;
  }

  hasImprovementStar(num) {
    return num > 1;
  }

  buildDataRows() {
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    const star = (
      <img className="star"src="/assets/green-star.png" alt="" width="50px"/>
    );

    const starPlaceholder = (
      <img className="star"src="" alt="" width="50px" height="52.44px"/>
    );

    const rows = this.props.rowData.map((dataEntry) => {
      return (
        <Tr>
          <Td className="tableCell" column="name" value={ dataEntry.name }>
            <p> { dataEntry.name.toUpperCase() } </p>
          </Td>
          <Td className="tableCell" column="zipCode" value={dataEntry.zipCode}>
            <p> { dataEntry.zipCode } </p>
          </Td>
          <Td className="tableCell" column="comparedToRegion" value={dataEntry.comparedToRegion}>
            <div className="percentage-container">
              { this.hasRegionStar(dataEntry.comparedToRegion) ? star : starPlaceholder }
              <p className="percentage-data"> { dataEntry.comparedToRegion.toFixed(1) + "%" } </p>
            </div>
          </Td>
          <Td className="tableCell" column="improvement" value={dataEntry.improvement}>
            <div className="percentage-container">
              { this.hasImprovementStar(dataEntry.improvement) ? star :starPlaceholder }
              <p className="percentage-data">
                { this.renderPercentageData(dataEntry.improvement) }
              </p>
            </div>
          </Td>
          <Td className="tableCell" column="bestPractice" value={dataEntry.bestPractice}>
            <div>
            <Petals bestPracticesData={ dataEntry.bestPractice }/>
            </div>
          </Td>
        </Tr>
      );
    });
    return rows;
  }
  render() {
    const Table = Reactable.Table;

    return (
      <div className="tableContainer twelve columns">
        <Table className="guideTable u-full-width"
          sortable= { ["name", "comparedToRegion", "improvement"] } >
          { this.buildTableHeader() }
          { this.buildDataRows() }
        </Table>
      </div>
    );
  }
}

export default FarmsAndRanchesTable;