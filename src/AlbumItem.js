import React from 'react';
import './AlbumItem.css';

export default function AlbumItem({ title, artist, favorite_songs }) {
  return (
    <div className='album'>
      <h3>{title}</h3>
      <h4>{artist}</h4>
      <p className='fav-songs-heading'>Favorite Songs: </p>
      <p className='song-list'>{favorite_songs}</p>
    </div>
  );
}

