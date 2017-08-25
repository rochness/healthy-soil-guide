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

  buildDataRows() {
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
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
            <p className="percentage-data"> { dataEntry.comparedToRegion.toFixed(1) + "%" } </p>
          </Td>
          <Td className="tableCell" column="improvement" value={dataEntry.improvement}>
            <p className="percentage-data"> {dataEntry.improvement > 0 ? "+" : "" }{ dataEntry.improvement.toFixed(1) + "%" } </p>
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