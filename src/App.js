import './App.css';
// import your arrays here
import { cities } from './cities.js';
import { books } from './books.js';
import CitiesList from './CitiesList.js';
import BooksList from './BooksList.js';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
      <hr />
      <BooksList books={books} />
    </div>
  );
}

export default App;
