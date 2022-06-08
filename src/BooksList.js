import React from 'react';
import './BooksList.css';
import BookItem from './BookItem.js';

export default function BooksList({ books }) {
  return (
    <div className='book-list'>
      {
        books.map((book, i) => <BookItem {...book} key={book.title + i} />)
      }
    </div>
  );
}

