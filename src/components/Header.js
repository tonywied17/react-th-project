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
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.menu-container')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className='md:p-0 p-4 w-full shadow-lg border-b-8 border-[#b8b2a8] top-in'>
      <div className='container md:py-4 mx-auto md:px-[100px] md:grid grid-cols-[auto_1fr] grid-rows-2 md:gap-3'>

        

        {/* Phone Number/Location Box */}
        <div className="lg:justify-self-end hidden lg:grid grid-cols-2 gap-10 text-[#b8b2a8] row-start-1 row-span-1 col-start-2">

            <div className='grid grid-cols-[auto_1fr] gap-4'>
              <div className='pr-4 border-r-2 border-[#b8b2a8]'>
              <span class="material-symbols-outlined">location_city</span>
              </div>
              <div>
                <span className='text-base uppercase font-semibold block'>Location</span>
                <span className='font-[300] text-sm text-[#eeede0]'>Phoenixville, PA 19460</span>
              </div>
            </div>
            <div className='grid grid-cols-[auto_1fr] gap-4'>
              <div className='pr-4 border-r-2 border-[#b8b2a8]'>
              <span class="material-symbols-outlined">call</span>
              </div>
              <div>
                <span className='text-base uppercase font-semibold block'>Call Us Now</span>
                <span className='font-[300] text-sm text-[#eeede0]'>(610) 995-2202</span>
              </div>
            </div>
            
        </div>

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className='row-start-2 row-span-1 col-start-1 col-span-1'>
          <div className='grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 text-[#cfc7b8] select-none active:scale-90 transition-all duration-300'>
            
            <div className='row-start-1 row-span-2 col-start-1 col-span-1'>
              <span class="material-symbols-outlined text-[50px]">cottage</span>
            </div>
            <div className='row-start-1 row-span-1 col-start-2 col-span-1 text-4xl uppercase font-bold tracking-tighter'>
              <span>tom</span><span className='text-[#eeede0]'>horgan</span>
            </div>
            <div className='row-start-2 row-span-1 col-start-2 col-span-1 tracking-tight font-[500]'>
              <span>Carpenter &amp; Builder</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="menu-container justify-self-end w-full md:w-auto md:col-start-2 row-start-2 text-justify">
          <div className="w-full menu-toggle mb-2 md:mb-0 text-[#eeede0] select-none text-right" onClick={toggleMenu}>
            
          <span>{menuOpen ? <span class="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}</span>
          </div>
          <nav className={` ${menuOpen ? 'open' : ''} w-full md:w-auto select-none`}>
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
