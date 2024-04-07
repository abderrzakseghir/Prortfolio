// src/Carousel.js
import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      {/* this is the web carousel */}
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
        style={{
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      />
      {/* this is the mobile images list */}
      <ul
        className="images_list"
        style={{
          display: "grid",
          gap: "2rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {images.map((image, index) => (
          <li key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                display: "block",
                maxWidth: "100%",
                borderRadius: "12px",
                boxShadow: "",
              }}
            />
          </li>
        ))}
      </ul>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
