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
  const highlightRef = useRef(null);

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
            image={"/handshake.webp"}
            title="Skills Spotlight"
            description="What I bring to the table & My Key Skills"
          />
          <h3 className="skill__category software__category">Software Engineering</h3>
          <div className="skills__wrapper" ref={frontendSkillsRef}>
            {FrontendSkills.map((fskill) => (
              <React.Fragment key={fskill.id}>
                <div className="skills__info">
                  <img
                    className="skills__icon"
                    src={fskill.imgPath}
                    alt={fskill.name}
                  />
                  <h3 className="skills__info--h1">{fskill.name}</h3>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h3 className="skill__category infrastructure__category">IT Support & Infrastructure</h3>
          <div className="skills__wrapper" ref={additionalSkillsRef}>
            {AdditionalSkills.map((askill) => (
              <React.Fragment key={askill.id}>
                <div className="skills__info">
                  <img
                    className="skills__icon"
                    src={askill.imgPath}
                    alt={askill.name}
                  />
                  <h3 className="skills__info--h1">{askill.name}</h3>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h3 className="skill__category tools__category">Tools & Platforms</h3>
          <div className="skills__wrapper" ref={toolsRef}>
            {Tools.map((tool) => (
              <React.Fragment key={tool.id}>
                <div className="skills__info">
                  <img
                    className="skills__icon"
                    src={tool.imgPath}
                    alt={tool.name}
                  />
                  <h3 className="skills__info--h1">{tool.name}</h3>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="highlights" ref={highlightRef}>
            <Highlight
              icon="/troubleshooting.webp"
              title="Root Cause Analysis"
              description="Diagnosing hardware, software, network, and system issues with a structured problem-solving approach."
            />
            <Highlight
              icon="/automation.webp"
              title="Automation & Improvements"
              description="Automating repetitive workflows and improving efficiency through tools, scripts, and better processes"
            />
            <Highlight
              icon="/enterprise_support.webp"
              title="Enterprise Support Experience"
              description="Supporting 500+ users, 300+ workstations, VOIP systems, printers, cameras, and infrastructure in production environments."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
