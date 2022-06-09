import React from 'react';
import './ShowItem.css';

export default function ShowItem({ title, genre, seasons, favorite_character }) {
  return (
    <div className='show'>
      <h3>{title}</h3>
      <p>seasons: {seasons}</p>
      <p>genre: {genre}</p>
      <p>favorite character: {favorite_character.name}</p>
      <p>played by: {favorite_character.played_by}</p>
    </div>
  );
}

