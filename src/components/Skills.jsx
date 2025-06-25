import React from "react";
import HeaderShortDescription from "./ui/HeaderShortDescription";
import { FrontendSkills, AdditionalSkills, Tools } from "../Constants";
import Highlight from "./Highlight";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <HeaderShortDescription
            image={"/handshake.png"}
            title="Skills Spotlight"
            description="What I bring to the table & My Key Skills"
          />
          <h1 className="skill__category">Frontend Skills</h1>
          <div className="skills__wrapper">
            {FrontendSkills.map((fskill) => (
              <React.Fragment key={fskill.id}>
                <div className="skills__info">
                  <img
                    className="skills__icon"
                    src={fskill.imgPath}
                    alt={fskill.name}
                  />
                  <h1 className="skills__info--h1">{fskill.name}</h1>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h1 className="skill__category">Additional Skills</h1>
          <div className="skills__wrapper">
            {AdditionalSkills.map((askill) => (
              <React.Fragment key={askill.id}>
                <div className="skills__info" >
                  <img
                    className="skills__icon"
                    src={askill.imgPath}
                    alt={askill.name}
                  />
                  <h1 className="skills__info--h1">{askill.name}</h1>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h1 className="skill__category">Tools</h1>
          <div className="skills__wrapper">
            {Tools.map((tool) => (
              <React.Fragment key={tool.id}>
                <div className="skills__info">
                  <img
                    className="skills__icon"
                    src={tool.imgPath}
                    alt={tool.name}
                  />
                  <h1 className="skills__info--h1">{tool.name}</h1>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="highlights">
              <Highlight
                icon="/seo.png"
                title="Quality Focus"
                description="Delivering high-quality results while maintaining the perfomance with responsive design and attention to every detail."
              />
              <Highlight
                icon="/time.png"
                title="Time Management"
                description="To Optimize the productivity, I prioritize completing projects ahead of deadlines to ensure seamless business operations and prevent potential delays"
              />
              <Highlight
                icon="/solution.png"
                title="Effective Solutions"
                description="I always approach my work with the 'Don't Repeat Yourself' (DRY) principle in mind, planning and developing optimal and effective solutions for my projects."
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
