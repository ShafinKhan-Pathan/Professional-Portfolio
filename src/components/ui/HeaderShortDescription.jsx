const HeaderShortDescription = ({image, title, description}) => {
  return (
    <div className="header__summary">
      <h5 className="header__short--message">
        <img className="header__summary--icon" src={`/icons${image}`} alt="quick_summary_icon" />
       {title}
      </h5>
      <h3 className="header__short--description">{description}</h3>
    </div>
  );
};

export default HeaderShortDescription;
