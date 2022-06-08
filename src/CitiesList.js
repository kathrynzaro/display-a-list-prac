import React from 'react';
import CityItem from './CityItem.js';

export default function CitiesList({ cities }) {
  return <div>
    {
      cities.map((city, i) => <CityItem city={city} key={city + i} />)
    }
  </div>;
}
