import React from 'react';
import CityItem from './CityItem.js';
import './CitiesList.css';

export default function CitiesList({ cities }) {
  return <div className='cities-list'>
    {
      cities.map((city, i) => <CityItem city={city} key={city + i} />)
    }
  </div>;
}
