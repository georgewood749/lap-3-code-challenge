import './App.css';
import fetchAPI from './actions';

function App() {

let myData = fetchAPI('georgewood749')

  return (
    <div className="App">
      <h1>GitHub Repo Tracker</h1>
    </div>
  );
}

export default App;
