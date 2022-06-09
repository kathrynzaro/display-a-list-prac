import React from 'react';
import './BookItem.css';

export default function BookItem({ title, author, year }) {
  return (
    <div className='book'>
      <h4 className='book-title'>{title}</h4>
      <p>Written by {author}</p>
      <p>Published in {year}</p>
    </div>
  );
}

