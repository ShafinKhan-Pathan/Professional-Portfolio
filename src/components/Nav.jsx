import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHandshake } from "@fortawesome/free-regular-svg-icons";
import Button from "./ui/Button";
import {
  faBars,
  faBriefcase,
  faContactBook,
  faHome,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  useGSAP(() => {
    gsap.fromTo(
      ".nav__wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="nav__wrapper">
            <figure className="nav__figure--logo">
              <img
                className="nav__logo"
                src="projects/Personal__logo2.png"
                alt="logo"
              />
            </figure>
            <ul className="nav__links">
              <li className="nav__link">
                <a className="nav__link--anchor" href="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
              </li>
              <li className="nav__link">
                <a className="nav__link--anchor" href="#projects">
                  <FontAwesomeIcon icon={faBriefcase} /> Projects
                </a>
              </li>
              <li className="nav__link">
                <a className="nav__link--anchor" href="#skills">
                  <FontAwesomeIcon icon={faHandshake} /> Skills
                </a>
              </li>
            </ul>
            <div className="nav__button">
              <Button symbol={faEnvelope} text="Contact Me" ref="#contact" />
            </div>
          </div>
          <button onClick={openMenu} className="btn__menu btn__menu--bars">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="menu__backdrop">
            <button onClick={closeMenu} className="btn__menu btn__menu--close">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a className="nav__link--anchor" onClick={closeMenu} href="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#projects"
                >
                  <FontAwesomeIcon icon={faBriefcase} /> Projects
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#skills"
                >
                  <FontAwesomeIcon icon={faHandshake} /> Skills
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#contact"
                >
                  <FontAwesomeIcon icon={faContactBook} /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
