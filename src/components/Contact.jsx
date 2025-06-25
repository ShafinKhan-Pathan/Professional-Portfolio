import React from "react";
import HeaderShortDescription from "./ui/HeaderShortDescription";
import Button from "./Button";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact__section">
        <div className="container">
          <div className="row">
            <HeaderShortDescription
              image="/chat.png"
              title="Have questions or ideas ? let's discuss 🚀"
              description="Get In Touch - Let's Connect"
            />
            <div className="contact__wrapper">
              <div className="contact__form">
                <form action="" className="contact__form--action">
                  <label>Your Name : </label>
                  <input type="text" placeholder="Enter you name" />
                  <label>Your Email : </label>
                  <input type="text" placeholder="Enter you name" />
                  <label>Your Message : </label>
                  <textarea type="text" placeholder="Enter you name" />
                </form>
                <Button symbol={faArrowRight} text="Send Message" ref={"/"} />
              </div>
              <div className="contact__details">
                <h1 className="contact__details--h1">Check my resume</h1>
                <Button
                  text="Download CV"
                  symbol={faDownload}
                  ref="/"
                />
                <h1 className="contact__details--h1">Find me On</h1>
                <div className="icon__wrapper">
                  <a target="/blank" href="https://github.com/ShafinKhan-Pathan">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a target="/blank" href="https://www.linkedin.com/in/shafin-khan-pathan/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
