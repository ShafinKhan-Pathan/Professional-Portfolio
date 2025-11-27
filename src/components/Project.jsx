import React, { useRef, useState } from "react";
import { projectPages } from "../Constants";
import HeaderShortDescription from "./ui/HeaderShortDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const sectionRef = useRef(null);
  const mainProjectRef = useRef(null);
  const smallProject1Ref = useRef(null);
  const smallProject2Ref = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = projectPages[currentPageIndex];
  const goToNextPage = () => {
    setCurrentPageIndex((prevPageIndex) =>
      prevPageIndex === projectPages.length - 1 ? 0 : prevPageIndex + 1
    );
  };
  const goToPreviousPage = () => {
    setCurrentPageIndex((prevPageIndex) =>
      prevPageIndex === 0 ? projectPages.length - 1 : prevPageIndex - 1
    );
  };
  if (!currentPage) {
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1>Solutions I've Built</h1>
          <p>No projects to display.</p>
        </div>
      </div>
    </section>;
  }
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const projects = [
      mainProjectRef.current,
      smallProject1Ref.current,
      smallProject2Ref.current,
    ];
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
  });
  return (
    <section id="projects" ref={sectionRef}>
      <div className="project__container">
        <div className="project__row">
          <HeaderShortDescription
            image={"/requirements.png"}
            title="Solutions I've Built"
            description="A Glimpse into My Development Work."
          />
          <div className="pagination">
            <div className="project__wrapper">
              <figure className="main__project" ref={mainProjectRef}>
                <a
                  href={currentPage.mainProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.mainProject.imgPath}
                    alt="main_project"
                    loading="lazy"
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.mainProject.title}
                  </h1>
                  {isMobile ? (
                    <>
                      <p>{currentPage.mainProject.mobileDescription}</p>
                    </>
                  ) : (
                    <>
                      <p>{currentPage.mainProject.description}</p>
                    </>
                  )}
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.mainProject.git}>
                    <FontAwesomeIcon size="xs" icon={faGithub} />
                  </a>
                  <a target="/blank" href={currentPage.mainProject.link}>
                    <FontAwesomeIcon size="xs" icon={faGlobe} />
                  </a>
                </div>
              </figure>

              <figure className="small__project1" ref={smallProject1Ref}>
                <a
                  href={currentPage.smallProject1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.smallProject1.imgPath}
                    alt="secondary_project"
                    loading="lazy"
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.smallProject1.title}
                  </h1>
                  {isMobile ? (
                    <>
                      <p>{currentPage.smallProject1.mobileDescription}</p>
                    </>
                  ) : (
                    <>
                      <p>{currentPage.smallProject1.description}</p>
                    </>
                  )}
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.smallProject1.git}>
                    <FontAwesomeIcon size="xs" icon={faGithub} />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="/blank"
                    href={currentPage.smallProject1.link}
                  >
                    <FontAwesomeIcon size="xs" icon={faGlobe} />
                  </a>
                </div>
              </figure>

              <figure
                className="small__project2"
                key={currentPage.smallProject2.id}
                ref={smallProject2Ref}
              >
                <a
                  href={currentPage.smallProject2.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.smallProject2.imgPath}
                    alt="secondary_project"
                    loading="lazy"
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.smallProject2.title}
                  </h1>
                  {isMobile ? (
                    <>
                      <p>{currentPage.smallProject2.mobileDescription}</p>
                    </>
                  ) : (
                    <>
                      <p>{currentPage.smallProject2.description}</p>
                    </>
                  )}
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.smallProject2.git}>
                    <FontAwesomeIcon size="xs" icon={faGithub} />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="/blank"
                    href={currentPage.smallProject2.link}
                  >
                    <FontAwesomeIcon size="xs" icon={faGlobe} />
                  </a>
                </div>
              </figure>
            </div>
            <>
              <a onClick={goToPreviousPage} aria-label="Previous Page">
                <img
                  className="leftArrow__pagination"
                  src="pagination/ArrowLeft.png"
                  alt="previous_arrow"
                />
              </a>
              <a onClick={goToNextPage} aria-label="Previous Page">
                <img
                  className="rightArrow__pagination"
                  src="pagination/ArrowRight.png"
                  alt="forward_arrow"
                />
              </a>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
