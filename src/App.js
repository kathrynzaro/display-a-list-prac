import './App.css';
// import your arrays here
import { cities } from './cities.js';
import { books } from './books.js';
import { shows } from './shows.js';
import CitiesList from './CitiesList.js';
import BooksList from './BooksList.js';
import ShowList from './ShowList';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
      <hr />
      <BooksList books={books} />
      <hr />
      <ShowList shows={shows} />
    </div>
  );
}

export default App;
