import React from 'react';
import './Navbar.css'; // Mengimpor styling untuk Navbar

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo di kiri atas */}
      <div className="navbar-logo">
        <img src="/OnePokemon/navbar-pokemon.png" alt="Logo" className="logo" />
      </div>
    </nav>
  );
}

export default Navbar;
