import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstagramImage from './InstagramImage';

function Gallery() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function loadMedia() {
      try {
        const response = await axios.get('http://localhost:5000/api/instagram/thomashorgancarpenterbuilder');
        if (Array.isArray(response.data)) {
          setMedia(response.data); // Assuming the API returns an array
        } else {
          console.error('Unexpected API response:', response.data);
        }
      } catch (error) {
        console.error('Error loading Instagram media:', error);
      }
    }

    loadMedia();
  }, []);

  return (
    <div className='container mx-auto fade-center lg:px-7'>
      <h2 className="md:text-4xl text-2xl font-extrabold text-[#313233] my-5">Instagram Gallery</h2>
      <p className="mt-4 mb-8 md:text-lg text-base text-[#47494a]">Explore our curated collection of inspiring moments on Instagram. Follow us for the latest updates!</p>
      <div className="gallery-grid">
        {media.map((item) => (
          <InstagramImage key={item.id} media={item} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
