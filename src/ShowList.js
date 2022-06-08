import React from 'react';
import ShowItem from './ShowItem.js';

export default function ShowList({ shows }) {
  return (
    <div>
      {
        shows.map((show, i) => <ShowItem {...show} key={show.title + i} />)
      }
    </div>
  );
}

