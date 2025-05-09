import React from 'react';
import './PokemonCard.css'; // Mengimpor CSS untuk styling

function PokemonCard({pokemon}) {
  // Data untuk Pokémon

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <span className="pokemon-card-type">{pokemon.type}</span>
        <span className="pokemon-card-id">#{pokemon.id}</span>
      </div>
      <div className="pokemon-card-image">
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-card-img" />
      </div>
      <div className="pokemon-card-name">
        <p>{pokemon.name} in one line</p>
      </div>
    </div>
  );
}

export default PokemonCard;
