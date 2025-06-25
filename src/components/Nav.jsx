import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope, faHandshake } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import {
  faBars,
  faBriefcase,
  faHome,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="nav__wrapper">
            <figure className="nav__figure--logo">
              <img
                className="nav__logo"
                src="/Personal__logo2.png"
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
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="nav__link--anchor"
                  onClick={closeMenu}
                  href="#contact"
                >
                  Contact
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
