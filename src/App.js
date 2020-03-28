import React, { Component } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { json as requestJson } from "d3-request";

import { dataLayer } from "./map-style.js";
import InformationPanel from "./information-panel";
import { updatePercentiles } from "./utils";

const getCovid19Data = async () => {
  const response = await fetch(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=0"
  );
  return response.json();
};

const defaultViewport = {
  width: "100%",
  height: "100vh",
  latitude: 21,
  longitude: 78,
  zoom: 2,
  bearing: 0,
  pitch: 0,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      hoveredFeature: null,
      viewport: defaultViewport,
    };

    this._setViewport = this._setViewport.bind(this);
    this._onHover = this._onHover.bind(this);
  }
  componentDidMount() {
    requestJson(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
      (error, geoData) => {
        if (!error) {
          getCovid19Data().then((covid19Data) => {
            const data = updatePercentiles(geoData, covid19Data);
            this._loadData(data);
          });
        }
      }
    );
  }
  _loadData = (data) => this.setState({ data });

  _setViewport = (viewport) => this.setState({ viewport });

  _onHover = (event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature =
      features && features.find((f) => f.layer.id === "data");

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;
    if (hoveredFeature) {
      if (hoveredFeature.properties.hasRecords) {
        const {
          name,
          confirmed,
          deaths,
          last_updated,
        } = hoveredFeature.properties;
        var _date = new Date(last_updated);
        return (
          hoveredFeature && (
            <div className="tooltip" style={{ left: x, top: y }}>
              <div>Country: {name}</div>
              <div>Confirmed Cases: {confirmed}</div>
              <div>Deaths: {deaths}</div>
              <div>Last Update: {_date.toUTCString()}</div>
            </div>
          )
        );
      } else {
        return (
          <div className="tooltip" style={{ left: x, top: y }}>
            Records not found for {hoveredFeature.properties.name}
          </div>
        );
      }
    }
  }

  render() {
    const { viewport, data } = this.state;
    if (!data) {
      return (
        <div>
          Fetching records, this may take upto 45 seconds for the first time...
        </div>
      );
    }

    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
          {...viewport}
          onViewportChange={this._setViewport}
          onHover={this._onHover}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
          {this._renderTooltip()}
        </ReactMapGL>
        <InformationPanel />
      </div>
    );
  }
}
