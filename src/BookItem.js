import React from 'react';
import './BookItem.css';

export default function BookItem({ title, author, year }) {
  return (
    <div className='book'>
      <p>{title}</p>
      <p>was written by {author}</p>
      <p>and published in {year}</p>
    </div>
  );
}

