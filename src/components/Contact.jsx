import HeaderShortDescription from "./ui/HeaderShortDescription";
import Button from "./ui/Button";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted :", formData);
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast("Message received! 🎉. I'll get back to you shortly.");
    } catch (error) {
      toast("Oops! Something's wrong. Please try again later 😊");
    } finally {
      setLoading(false);
    }
    setFormData({ name: "", email: "", message: "" });
  };
  useGSAP(() => {
    gsap.fromTo(
      ".contact__section",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);
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
                <form
                  onSubmit={handleSubmit}
                  className="contact__form--action"
                  ref={formRef}
                >
                  <label htmlFor="name">Your Name : </label>
                  <input
                    type="text"
                    placeholder="Your good name ?"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="email">Your Email : </label>
                  <input
                    type="text"
                    placeholder="What's your email address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="message">Your Message : </label>
                  <textarea
                    rows="5"
                    placeholder="Share your vision—let’s make it real."
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                  <button
                    type="submit"
                    className="nav__button--contact"
                    disabled={loading}
                    aria-label="contact_me"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="contact__icon"
                    />
                  </button>
                </form>
              </div>
              <div className="contact__details">
                <div
                  className="contact__details--info"
                  style={{ display: "flex", gap: "16px" }}
                >
                  <h3 className="contact__details--h1">View My Resume</h3>
                  <Button
                    text="Download Resume"
                    symbol={faDownload}
                    ref="/assets/ShafinKhan-Frontend-Resume.pdf"
                  />
                </div>

                <h1 className="contact__details--h1">
                  Find Me on Social Networks
                </h1>
                <div className="icon__wrapper">
                  <a
                    target="/blank"
                    href="https://github.com/ShafinKhan-Pathan"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    target="/blank"
                    href="https://www.linkedin.com/in/shafin-khan-pathan/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    target="/blank"
                    href="mailto:shafinkhanpathan2002@gmail.com"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
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
