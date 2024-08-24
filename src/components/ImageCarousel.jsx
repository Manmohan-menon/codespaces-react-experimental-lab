import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/ImageCarousel.css';

const ImageCarousel = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const response = await fetch('/images-items.json');
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
              setImages(data);
            } else {
              setError('No images found');
            }
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchImages();
    }, []);
    
    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error}</div>;
    }
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={80}
      >
        {images.map((image, index) => (
          <div key={index} className='carousel-slide'>
            <img src={image} alt={`Slide ${index}`} className='carousel-image' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
