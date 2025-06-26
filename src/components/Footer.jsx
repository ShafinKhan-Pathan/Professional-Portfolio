import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
      gsap.fromTo(
        ".footer__wrapper",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__wrapper">
            <p>Copyright &copy; SKPTech 2025</p>
            <p>Design and Developed by Shafin Khan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
