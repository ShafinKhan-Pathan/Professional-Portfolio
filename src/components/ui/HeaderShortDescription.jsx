import React from "react";

const HeaderShortDescription = ({image, title, description}) => {
  return (
    <div className="header__summary">
      <h6 className="header__short--message">
        <img className="header__summary--icon" src={image} alt="" />
       {title}
      </h6>
      <h1 className="header__short--description">{description}</h1>
    </div>
  );
};

export default HeaderShortDescription;
