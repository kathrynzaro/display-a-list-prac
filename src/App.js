import './App.css';
// import your arrays here
import { cities } from './cities.js';
import CitiesList from './CitiesList.js';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
    </div>
  );
}

export default App;
