import React, { useEffect, useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';
import api from './services/api';

import Header from './components/Header';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon')
      .then(res => {
        console.log(res.data.results);
        setPokemons(res.data.results)
      })
      .catch(err => console.error(err));
  }, []);

  function handleAddPokemon() {
    setPokemons([...pokemons, {
      name: `New pokemon ${Date.now()}`,
      url: 'fakeurl.co'
    }]);
  }

  return (
    <>
      <Header title="Pokemons" />

      {/* <img width={300} src={backgroundImage} alt="Background image" /> */}
      
      <button type="button" onClick={handleAddPokemon}>Add pokemon</button>

      <ul>
        {pokemons.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </>
  );
}

export default App;