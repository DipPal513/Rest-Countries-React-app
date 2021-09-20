import React from "react";
import './Header.css'

function Header() {
  return (
    <div>
      <nav className = 'menu'>
        <a href="/home">home</a>
        <a href="/contact">contact</a>
        <a href="/services">services</a>
      </nav>
    </div>
  );
}

export default Header;
