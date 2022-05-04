import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const catchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => response.json())
    .then(data => setList(data.results))
  }

  return (
    <div className="App">
      <button onClick={catchPokemon}>Fetch Pokemon</button>
      <ul>
        {list.map((item, i) => 
          <li key={i}>{item.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
