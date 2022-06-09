import React from 'react';
import ShowItem from './ShowItem.js';
import './ShowList.css';

export default function ShowList({ shows }) {
  return (
    <div className='shows'>
      {
        shows.map((show, i) => <ShowItem {...show} key={show.title + i} />)
      }
    </div>
  );
}

