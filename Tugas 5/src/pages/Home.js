// Mengimpor React dan CSS untuk styling
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Mengimpor file CSS
import PokemonCard from '../components/PokemonCard';
import SortMenu from '../components/SortMenu';

// Komponen halaman Home
function Home() {
   // Dummy list of Pokémon
   const [isSingleColumn, setIsSingleColumn] = useState(true); // Default to single column

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

  return (
    <div className="home">
       <main>
       <SortMenu setIsSingleColumn={setIsSingleColumn} /> {/* Pass function to SortMenu to control grid layout */}
        <div className={`pokemon-card-list ${isSingleColumn ? 'single-column' : 'two-columns'}`}>
          {pokemonList.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}> {/* Link to the detail page */}
              <PokemonCard pokemon={pokemon} />
            </Link>
          ))}
        </div>
       </main>
    </div>
  );
}

export default Home;
