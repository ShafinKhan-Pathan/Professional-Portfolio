import React, { useEffect, useState } from "react";
const StarBackground = () => {
  const [stars, setStars] = useState([]);
  useEffect(()=>{
    generateStarts()
  },[])
  const generateStarts = () => {
    const numberOfStarts = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStarts; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
      setStars(newStars);
    }
  };
  return (
    <>
      <div className="stars__wrapper">
        {stars.map((star) => (
          <div
            className="star pulse"
            key={star.id}
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default StarBackground;
