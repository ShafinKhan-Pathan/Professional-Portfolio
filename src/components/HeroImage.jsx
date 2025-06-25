import React from "react";

const HeroImage = ({image}) => {
  return (
    <div className="hero__img">
      <img className="hero__img--desk" src={image} alt="" />
    </div>
  );
};

export default HeroImage;
