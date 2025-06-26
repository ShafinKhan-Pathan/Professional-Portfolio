import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ symbol, text, ref }) => {
  return (
    <a href={ref}>
      <button className="nav__button--contact">
        {text}
        <FontAwesomeIcon icon={symbol} className="contact__icon" />
      </button>
    </a>
  );
};

export default Button;
