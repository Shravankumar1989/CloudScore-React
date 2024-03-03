import React from 'react';

const HomeVP = () => {
  return (
    <div className="centered-content">
      <video playsInline autoPlay muted preload="auto" className="responsive-video">
        <source src="videos/animation1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeVP;