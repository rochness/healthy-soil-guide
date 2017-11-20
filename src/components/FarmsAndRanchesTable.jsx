import React, { Component } from 'react';
import Reactable from "reactable";
import Petals from "./Petals";
import { farmData } from "../data/data.js";

class FarmsAndRanchesTable extends Component {
  constructor(props) {
    super(props);
  }

  buildTableHeader() {
    // const fieldToHeader = {
    //   name: "Name",
    //   zipCode: "Zip Code",
    //   comparedToRegion: "Organic Matter Compared to Region",
    //   improvement: "Organic Matter Improvement",
    //   bestPractice: "Best Practices"
    // };

    const Thead = Reactable.Thead;
    const Th = Reactable.Th;

    const headers = this.props.headers.concat("Best Practices").map((field) => {
      return (
        <Th className="tableHeader tableCell" column={ field }>
          <strong className="table-header">
            { field }
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
      <div className="star"/>
    );

    const headers = this.props.headers.concat("Best Practices");

    const rows = this.props.rowData.map((dataEntry) => {
      const bestPractice = {
        bestPractice1: dataEntry.bestPractice1,
        bestPractice2: dataEntry.bestPractice2,
        bestPractice3: dataEntry.bestPractice3,
        bestPractice4: dataEntry.bestPractice4,
        bestPractice5: dataEntry.bestPractice5,
      };

      return (
        <Tr>
          <Td className="tableCell" column={headers[0]} value={ dataEntry[headers[0]] }>
            <p> { dataEntry[headers[0]].toUpperCase() } </p>
          </Td>
          <Td className="tableCell" column={headers[1]} value={dataEntry[headers[1]]}>
            <p> { dataEntry[headers[1]] } </p>
          </Td>
          <Td className="tableCell" column={headers[2]} value={dataEntry[headers[2]]}>
            <div className="percentage-container">
              { this.hasRegionStar(dataEntry[headers[2]]) ? star : starPlaceholder }
              <p className="percentage-data"> { dataEntry[headers[2]].toFixed(1) + "%" } </p>
            </div>
          </Td>
          <Td className="tableCell" column={headers[3]} value={dataEntry[headers[4]]}>
            <div className="percentage-container">
              { this.hasImprovementStar(dataEntry[headers[3]]) ? star :starPlaceholder }
              <p className="percentage-data">
                { this.renderPercentageData(dataEntry[headers[3]]) }
              </p>
            </div>
          </Td>
          <Td className="tableCell" column={headers[4]} value={dataEntry[headers[4]]}>
            <div>
              <Petals bestPracticesData={ bestPractice }/>
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
          sortable>
         {/*sortable={ ["name", "comparedToRegion", "improvement"] */}
          { this.buildTableHeader() }
          { this.buildDataRows() }
        </Table>
      </div>
    );
  }
}

export default FarmsAndRanchesTable;