import './App.css';
// import your arrays here
import { cities } from './cities.js';
import { books } from './books.js';
import { shows } from './shows.js';
import { albums } from './albums.js';
import CitiesList from './CitiesList.js';
import BooksList from './BooksList.js';
import ShowList from './ShowList';
import AlbumsList from './AlbumsList.js';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
      <BooksList books={books} />
      <ShowList shows={shows} />
      <AlbumsList albums={albums} />
    </div>
  );
}

export default App;
