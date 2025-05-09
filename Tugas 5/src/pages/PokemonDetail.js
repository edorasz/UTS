// PokemonDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';
import Pokemon from "../components/Pokemon";
import PokemonName from "../components/PokemonName";
import PokemonStatus from "../components/PokemonStatus";

// Dummy list of Pokémon
const pokemonList = [
  { id: 1001, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' },
  { id: 1002, name: 'Kabuto', type: 'Rock', image: '/OnePokemon/pokemon.png' },
  { id: 1003, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' },
  { id: 1004, name: 'Kabuto', type: 'Rock', image: '/OnePokemon/pokemon.png' },
  { id: 1005, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' },
  { id: 1006, name: 'Kabuto', type: 'Rock', image: '/OnePokemon/pokemon.png' },
  { id: 1007, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' },
  { id: 1008, name: 'Kabuto', type: 'Rock', image: '/OnePokemon/pokemon.png' },
  { id: 1009, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' }
];

function PokemonDetail() {
  const { id } = useParams(); // Get the Pokémon ID from the URL

  // Find the Pokémon details based on ID
  const pokemon = pokemonList.find(p => p.id === parseInt(id));

  // If the Pokémon is not found, show an error or a not-found page
  if (!pokemon) {
    return <h2>Pokémon not found</h2>;
  }

  return (
    <div className='pokemon-detail-container'>
      <div className="pokemon-detail">
        <Pokemon pokemon={pokemon} /> {/* Passing the Pokémon object */}
        <PokemonName name={pokemon.name} /> {/* Displaying Pokémon name */}
        <PokemonStatus type={pokemon.type} /> {/* Displaying Pokémon type */}
      </div>
    </div>
  );
}

export default PokemonDetail;
