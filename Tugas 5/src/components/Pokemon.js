import React from 'react';
import './Pokemon.css'; // Mengimpor CSS untuk komponen Pokemon

function Pokemon({pokemon}) {
  return (
    <div className="pokemon">
      <div className="pokemon-id">#1000</div>
      <div className="pokemon-image">
        <img src ={pokemon.image} alt="Pokemon" className="pokemon-img" />
      </div>
    </div>
  );
}

export default Pokemon;