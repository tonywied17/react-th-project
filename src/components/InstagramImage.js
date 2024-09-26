// src/components/InstagramImage.js
import React from 'react';

function InstagramImage({ media })
{
  return (
    <div className="instagram-image">
      {media.isVideo ? (
        <video controls>
          <source src={media.photo} type="video/mp4" />
        </video>
      ) : (
        <img src={media.photo} alt={media.description} />
      )}
      <p>{media.description}</p>
    </div>
  );
}

export default InstagramImage;
