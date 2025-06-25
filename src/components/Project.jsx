import React, { useState } from "react";
import { projectPages } from "../Constants";
import HeaderShortDescription from "./ui/HeaderShortDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Project = () => {
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
  return (
    <section id="projects">
      <div className="project__container">
        <div className="project__row">
          <HeaderShortDescription
            image={"/requirements.png"}
            title="Solutions I've Built"
            description="A Glimpse into My Development Work."
          />
          <div className="pagination">
            <div className="project__wrapper">
              <figure className="main__project">
                <a
                  href={currentPage.mainProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.mainProject.imgPath}
                    alt=""
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.mainProject.title}
                  </h1>
                  <p>{currentPage.mainProject.description}</p>
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.mainProject.git}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a target="/blank" href={currentPage.mainProject.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </figure>

              <figure className="small__project1">
                <a
                  href={currentPage.smallProject1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.smallProject1.imgPath}
                    alt=""
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.smallProject1.title}
                  </h1>
                  <p>{currentPage.smallProject1.description}</p>
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.smallProject1.git}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a rel="noopener noreferrer" target="/blank" href={currentPage.smallProject1.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </figure>

              <figure
                className="small__project2"
                key={currentPage.smallProject2.id}
              >
                <a
                  href={currentPage.smallProject2.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project__img"
                    src={currentPage.smallProject2.imgPath}
                    alt=""
                  />
                </a>
                <div className="project__info">
                  <h1 className="project__title">
                    {currentPage.smallProject2.title}
                  </h1>
                  <p>{currentPage.smallProject2.description}</p>
                </div>
                <div className="icon__wrapper">
                  <a target="/blank" href={currentPage.smallProject2.git}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a rel="noopener noreferrer" target="/blank" href={currentPage.smallProject2.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </figure>
            </div>
            <>
              <a onClick={goToPreviousPage} aria-label="Previous Page">
                <img
                  className="leftArrow__pagination"
                  src="/ArrowLeft.png"
                  alt=""
                />
              </a>
              <a onClick={goToNextPage} aria-label="Previous Page">
                <img
                  className="rightArrow__pagination"
                  src="/ArrowRight.png"
                  alt=""
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
