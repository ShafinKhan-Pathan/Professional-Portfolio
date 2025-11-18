import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ symbol, text, ref }) => {
  const isExternal = ref?.startsWith("http") || ref?.endsWith(".pdf");
  return (
    <a
      href={ref}
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
