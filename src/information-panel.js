import React, { PureComponent } from "react";
import { FaInfo, FaTimes } from 'react-icons/fa';

export default class InformationPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }

    this._toggleMenu = this._toggleMenu.bind(this);
  }
  _toggleMenu() {
      this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    return (
      <React.Fragment>
        <div className="information-icon" onClick={this._toggleMenu}>
          {this.state.isOpen ? <FaTimes/> : <FaInfo/>}
        </div>
        {this.state.isOpen ? <div className="information-panel">
        <h4>COVID19 geographical outbreaks Country wise</h4>
        <ul>
          <li style={{ background: "#d53e4f" }}>Highest confirmed cases</li>
          <li style={{ background: "#f46d43" }}>&nbsp;</li>
          <li style={{ background: "#fee08b" }}>&nbsp;</li>
          <li style={{ background: "#ffffbf", color: "#908a8a" }}>
            outbreak situation start
          </li>
          <li style={{ background: "#e6f598" }}>&nbsp;</li>
          <li style={{ background: "#abdda4" }}>&nbsp;</li>
          <li style={{ background: "#66c2a5" }}>&nbsp;</li>
          <li style={{ background: "#3288bd" }}>Lowest confirmed cases</li>
          <li style={{ background: "#000000" }}>Records not available</li>
        </ul>
        <p>
          Developed by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hashir-hussain/"
            target="_blank"
          >
            Hashir Hussain
          </a>
        </p>
      </div> : <div/>}
      </React.Fragment>
    );
  }
}
