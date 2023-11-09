import React, { useEffect, useState, useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Carousel() {
  // Initialize carouselData state
  const [carouselData, setCarouselData] = useState([]);

  // Context
  const { api, clientKey } = useContext(NewsContext);

  useEffect(() => {
    fetch(`${api}${clientKey}&categories=entertainment`)
      .then((res) => res.json())
      .then((featuredData) => setCarouselData(featuredData.data));
  }, [api, clientKey]);

  const data = carouselData.slice(0, 3);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide slider"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        {data.map((carousel, index) => (
          <div
            key={carousel.title}
            className={index === 0 ? "carousel-item active" : "carousel-item"}
            id="carousel-two-text"
          >
            <img
              src={carousel.image}
              className="d-block w-100 img-fluid"
              alt={carousel.title}
            />
            <div className="carousel-caption d-md-block carousel-content">
              <h5>{carousel.title}</h5>
              <p>{carousel.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
