import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Assurez-vous d'avoir un fichier CSS pour le style du Carousel

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effet pour changer d'image toutes les 3 secondes
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className={index === currentImageIndex ? "slide active" : "slide"}
        />
      ))}
    </div>
  );
};

export default Carousel;
