import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlight = ({icon, title, description}) => {
  return (
    <div className="highlight__wrapper">
      <figure className="higlight__figure">
        <img className="highlight__img" src={icon} alt="" />
      </figure>
      <div className="higlight__text">
        <h1 className="higlight__text--h1">{title}</h1>
        <p className="higlight__text--p">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
