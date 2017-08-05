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
      <div className="two-columns" style={ parent }>
        <div className="left-column">
          { this.props.section1 }
        </div>
        <div className="right-column">
          { this.props.section2 }
        </div>
      </div>
    );
  }
}

export default TwoColumnInfoSection;