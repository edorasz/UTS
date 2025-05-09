import React from 'react';
import './PokemonStatus.css'; // Mengimpor styling untuk Stats

function PokemonStatus() {
  // Data untuk stats (Health, Attack, Defense)
  const health = 144;
  const maxHealth = 1000;
  const attack = 32;
  const defense = 50;

  // Menghitung persentase untuk progress bar Health
  const healthPercentage = (health / maxHealth) * 100;

  return (
    <div className="stats-container">
        <div className="stats-card">
            <div className="stat">
                <label>Health</label>
                <div className="progress-bar">
                <div className="progress" style={{ width: `${healthPercentage}%` }}></div>
                </div>
                <p>{health} from {maxHealth}</p>
            </div>

            <hr />

            <div className='stat-wrapper'>
                <div className="stat">
                    <label>Attack</label>
                    <p>{attack}</p>
                </div>

                <div className="stat">
                    <label>Defense</label>
                    <p>{defense}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PokemonStatus;
