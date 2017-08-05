import React, { Component } from 'react';
import Reactable from "reactable";

class RestaurantsTable extends Component {
  constructor(props) {
    super(props);
    const name = "Restaurant";
    const zipCode = 90000;
    const comparedToRegion = 5.5;
    const improvement = 2.2;
    const bestPractice = "blah";
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
      return {
        name: name.concat(num),
        zipCode: zipCode + num,
        comparedToRegion: (comparedToRegion + num),
        improvement: (improvement - num),
        bestPractice: bestPractice.concat(num),
        };
      }),
    };
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
        <Th className="tableCell" column={ field }>
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

  buildDataRows() {
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    const rows = this.state.data.map((dataEntry) => {
      return (
        <Tr>
          <Td className="tableCell" column="name" value={ dataEntry.name }>
            <p> { dataEntry.name.toUpperCase() } </p>
          </Td>
          <Td className="tableCell" column="zipCode" value={dataEntry.zipCode}>
            <p> { dataEntry.zipCode } </p>
          </Td>
          <Td className="tableCell" column="comparedToRegion" value={dataEntry.comparedToRegion}>
            <p> { dataEntry.comparedToRegion.toFixed(1) + "%" } </p>
          </Td>
          <Td className="tableCell" column="improvement" value={dataEntry.improvement}>
            <p> { dataEntry.improvement.toFixed(1) + "%" } </p>
          </Td>
          <Td className="tableCell" column="bestPractice" value={dataEntry.bestPractice}>
            <p> { dataEntry.bestPractice } </p>
          </Td>
        </Tr>
      );
    });
    return rows;
  }
  render() {
    const Table = Reactable.Table;

    return (
      <div className="tableContainer">
        <Table className="guideTable"
          sortable= { ["name", "comparedToRegion", "improvement"] } >
          { this.buildTableHeader() }
          { this.buildDataRows() }
        </Table>
      </div>
    );
  }
}

export default RestaurantsTable;