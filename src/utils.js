import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

function getDomain({locations}) {
  const domains = {};
  locations.forEach(location => {
    domains[location.country_code] = (domains[location.country_code] || 0) + location.latest.confirmed
     
  });
  return domains;
}

export function updatePercentiles(geoData, covid19Data) {
  const {features} = geoData;
  const domains = getDomain(covid19Data);
  const scale = scaleQuantile()
    .domain(Object.values(domains))
    .range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const value = domains[f.properties.ISO_A2];
      const properties = {
        ...f.properties,
        name: f.properties.ADMIN,
        value,
        percentile: scale(value)
      };
      return {...f, properties};
    })
  };
}