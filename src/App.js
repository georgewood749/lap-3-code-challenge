import Header from "./layout/Header";
import './App.css';
import fetchAPI from ''

function App() {
  fetchAPI()

  return (
    <div className="App">
      <Header/>
      App
    </div>
  );
}

export default App;
