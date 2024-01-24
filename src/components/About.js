import React from 'react';

function About() {
  return (
    <div className='container mx-auto fade-center lg:px-7 md:h-[calc(100vh-308px)]'>
      <h2 class="md:text-4xl text-2xl font-extrabold text-[#313233] my-5 drop-shadow-md">About Us</h2>
      <p class="mt-4 mb-8 md:text-lg text-base text-[#47494a]">Discover the story behind our passion for creating exceptional spaces and delivering outstanding projects.</p>

      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 container mx-auto px-[22px] mb-7">
      <div class="flex-bdr-img justify-self-center">
          <img src="https://tomhorgancarpenter.com/img/bg/about-us.jpg" alt="About Us" className=' brightness-90'></img>
      </div>
      <div className='font-serif text-[#b8b2a8] justify-self-center p-5 mx-5 bg-[#344658]/90 border-[22px] border-[#b8b2a8] h-fit scale-center shadow-inner drop-shadow-md'>
        <div className='p-2 text-lg'>
        <strong>Tom Horgan Sr.</strong> established <strong>Thomas Horgan Carpenter & Builder</strong> in 1951, located in Garrett Hill, Rosemont, PA. He has worked on the Main Line with his son Tom Horgan Jr., who now owns and runs the business <strong>with his sons.</strong> They have been involved in custom homes, kitchens, bathrooms, doors and windows. They specialize in restoring old homes on the Main Line for <strong>3 generations..</strong>
        </div>
        <div className='p-4'>
        <strong>Our service area includes:</strong>  Ardmore, Bryn Mawr, Berwyn, Devon, Gladwyne, Haverford, Malvern, Merion, Paoli, Penn Valley, Phoenixville, Radnor, Rosemont, St. Davids, Strafford, Valley Forge, Villanova, Wayne and Wynnewood.
        </div>
        <div className='mt-4 text-center font-[700] text-2xl drop-shadow-md opacity-90'>
        YOU DREAM IT WE BUILD IT!
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
