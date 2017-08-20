import React, { Component } from 'react';

class TwoColumnInfoSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parent = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    };

    const child = {
      flex: 1,
      textAlign: 'left',
    };

    return (
      <div className="row">
        <div className="six columns">
          { this.props.section1 }
        </div>
        <div className="six columns">
          { this.props.section2 }
        </div>
      </div>
    );
  }
}

export default TwoColumnInfoSection;