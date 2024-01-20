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
    <header className='p-2'>
      <div className='container md:py-[22px] mx-auto px-[200px] grid grid-cols-[auto_1fr] gap-3'>
        {/* Logo */}
        <div className='text-3xl uppercase font-bold tracking-tighter mb-2 md:mb-0'>
          <span className='text-[#cfc7b8]'>tom</span><span className='text-[#eeede0]'>horgan</span>
        </div>

        {/* Phone Number/Location Box */}
        <div className="md:justify-self-end hidden md:block">
          <div className="text-white">Phone: XXX-XXX-XXXX</div>
          <div className="text-white">Location: Your Location</div>
        </div>

        {/* Navigation */}
        <div className="menu-container md:justify-self-end w-full md:w-auto md:col-start-2 row-start-2 justify-self-center text-center md:text-justify">
          <div className="menu-toggle mb-2 md:mb-0" onClick={toggleMenu}>
            &#9776;
          </div>
          <nav className={` ${menuOpen ? 'open' : ''} w-full md:w-auto`}>
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
      </div>
    </header>
  );
}

export default Header;
