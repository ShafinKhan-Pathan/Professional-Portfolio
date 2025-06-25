import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__wrapper">
            <p>Copyright &copy; SKPTech 2025</p>
            <p>Design and Developed by Shafin Khan</p>
            
            {/* <div className="contact__details--icon">
              <a href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
