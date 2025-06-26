import React, { useRef } from "react";
import HeaderShortDescription from "./ui/HeaderShortDescription";
import { FrontendSkills, AdditionalSkills, Tools } from "../Constants";
import Highlight from "./ui/Highlight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  const sectionRef = useRef(null);
  const frontendSkillsRef = useRef(null);
  const additionalSkillsRef = useRef(null);
  const toolsRef = useRef(null);
  const highlightRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const allSkills = [
      frontendSkillsRef.current,
      additionalSkillsRef.current,
      toolsRef.current,
      highlightRef.current,
    ];
    allSkills.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: skill, start: "top bottom-=100" },
        }
      );
    });
  });

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <HeaderShortDescription
            image={"/handshake.png"}
            title="Skills Spotlight"
            description="What I bring to the table & My Key Skills"
          />
          <h1 className="skill__category">Frontend Skills</h1>
          <div className="skills__wrapper" ref={frontendSkillsRef}>
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
          <div className="skills__wrapper" ref={additionalSkillsRef}>
            {AdditionalSkills.map((askill) => (
              <React.Fragment key={askill.id}>
                <div className="skills__info">
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
          <div className="skills__wrapper" ref={toolsRef}>
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
          <div className="highlights" ref={highlightRef}>
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
