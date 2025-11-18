import { words } from "../Constants";
import Button from "./ui/Button";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { lazy, Suspense, useEffect, useState } from "react";
const LazyHeroModel = lazy(() => import("./HeroModel"));
const Hero = () => {
  const [showHeroModel, setShowHeroModel] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroModel(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".hero__text--h1",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".project__button, .hero__text p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, []);
  useGSAP(() => {
    if (setShowHeroModel) {
      gsap.fromTo(
        ".hero__3d--wrapper",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: "power2.inOut" }
      );
    }
  }, [showHeroModel]);
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="wrap__up">
            <div className="hero__section">
              <div className="hero__text">
                <h1 className="hero__text--h1">
                  Shaping
                  <span className="slider">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span className="hero__slider" key={word.text}>
                          <img
                            className="hero__text--icon"
                            src={word.imgPath}
                            alt="my-skills"
                          />
                          {word.text}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1 className="hero__text--h1">into Real World Projects</h1>
                <h1 className="hero__text--h1">that Deliver Results</h1>
                <p className="hero__text--p">
                  Hi, I'm Shafin Khan, a developer based in Texas, on a journey
                  to become a Frontend Software Engineer.
                </p>
                <div className="project__button">
                  <Button
                    symbol={faArrowDown}
                    text="Check My Work"
                    ref="#projects"
                  />
                </div>
              </div>
              <figure>
                <div className="hero__3d--wrapper">
                  {showHeroModel && (
                    <Suspense fallback={null}>
                      <LazyHeroModel />
                    </Suspense>
                  )}
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
