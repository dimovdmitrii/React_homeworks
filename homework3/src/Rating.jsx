import React, { useState } from "react";
import "./App.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

    "https://www.clipartmax.com/png/small/343-3434508_sample-review-page-w-sponsor-sidebar-3-star-rating-gif.png",

    "https://www.clipartmax.com/png/small/72-728472_owen-4-star-rating.png",

    "https://www.clipartmax.com/png/small/67-676995_5-star-rating-png.png",
  ];

  return (
    <div className="rating-container">
      <img
        src={ratingList[ratingValue]}
        alt="Рейтинг"
        className="rating-image"
      />
      <div className="rating-button-container">
        <button className="rating-button" onClick={() => setRatingValue(0)}>
          Плохо
        </button>
        <button className="rating-button" onClick={() => setRatingValue(1)}>
          Приемлемо
        </button>
        <button className="rating-button" onClick={() => setRatingValue(2)}>
          Хорошо
        </button>
        <button className="rating-button" onClick={() => setRatingValue(3)}>
          Отлично
        </button>
      </div>
    </div>
  );
}

export default Rating;
