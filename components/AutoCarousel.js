import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const AutoCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} >
      <div>
        <img src="https://res.cloudinary.com/dj61ewxvc/image/upload/v1747386354/home-01_ju6xng.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dj61ewxvc/image/upload/v1747386061/slide-01_vwqcfl.jpg" alt="Image 2" />
      </div> 
    </Carousel>
  );
};

export default AutoCarousel;
