import React from 'react';
import AlbumItem from './AlbumItem.js';
import './AlbumList.css';

export default function AlbumsList({ albums }) {
  return (
    <div className='albums-list'>
      {
        albums.map((album, i) => <AlbumItem {...album} key={album.title + i} />)
      }
    </div>
  );
}

