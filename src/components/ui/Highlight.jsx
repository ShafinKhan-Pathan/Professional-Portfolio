const Highlight = ({icon, title, description}) => {
  return (
    <div className="highlight__wrapper">
      <figure className="higlight__figure">
        <img className="highlight__img" src={`icons/${icon}`} alt="highlight_icon" />
      </figure>
      <div className="higlight__text">
        <h3 className="higlight__text--h1">{title}</h3>
        <p className="higlight__text--p">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
