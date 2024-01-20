import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Add a global click event listener
    const handleClickOutside = (event) => {
      // Check if the clicked element is not part of the menu
      if (menuOpen && !event.target.closest('.menu-container')) {
        closeMenu();
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header>
      <h1>Tom Horgan Carpenter & Builder</h1>
      <div className="menu-container">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
        <nav className={menuOpen ? 'open' : ''}>
          {/* Navigation Links */}
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/manufacturers" onClick={closeMenu}>Manufacturers</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
