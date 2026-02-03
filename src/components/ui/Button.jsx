import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ symbol, text, href }) => {
  const isExternal = href?.startsWith("http") || href?.endsWith(".pdf");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <button className="nav__button--contact" aria-label={text}>
        {text}
        <FontAwesomeIcon icon={symbol} className="contact__icon" />
      </button>
    </a>
  );
};

export default Button;
