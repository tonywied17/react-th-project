import React from 'react';

const year = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;

function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-7">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm text-[#b8b2a8]">&copy; {year} - {nextYear} Tom Horgan Carpenter &amp; Builder</p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            {/* Footer Links */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
