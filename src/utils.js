import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

function getDomain({locations}) {
  const domains = {};
  locations.forEach(location => {
    if(domains.hasOwnProperty(location.country_code)) {
        domains[location.country_code].confirmed += location.latest.confirmed
        domains[location.country_code].deaths += location.latest.deaths
    } else {
      domains[location.country_code] = {
        confirmed: location.latest.confirmed,
        deaths: location.latest.deaths,
        last_updated: location.last_updated
      };
    }
  });
  return domains;
}

export function updatePercentiles(geoData, covid19Data) {
  const {features} = geoData;
  const domains = getDomain(covid19Data);
  const scale = scaleQuantile()
    .domain(Object.keys(domains).map(key =>  domains[key].confirmed))
    .range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      let properties = {};
      if( domains[f.properties.ISO_A2]) {
        const confirmed = domains[f.properties.ISO_A2].confirmed;
        properties = {
          ...f.properties,
          name: f.properties.ADMIN,
          hasRecords: true,
          deaths: domains[f.properties.ISO_A2].deaths,
          last_updated: domains[f.properties.ISO_A2].last_updated,
          confirmed,
          percentile: scale(confirmed)
        };
      } else {
        properties = {
          ...f.properties,
          name: f.properties.ADMIN,
          hasRecords: false
        };
      }
      return {...f, properties};
    })
  };
}