import React from 'react';
import './PokemonName.css'; // Mengimpor CSS untuk komponen Pokemon

function PokemonName() {
  return (
    <div className="pokemon-name">
      <h1>Bulbasaur</h1>
      <img src ="/OnePokemon/bulbasaur.png" alt="Pokemon" className="pokemon-name-img" />
    </div>
  );
}

export default PokemonName;