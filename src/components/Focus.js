import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const SkillsStyles = styled.section`
  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.5em;
    font-size: 2rem;
  }

  .skills-paragraph {
    font-size: 1.075rem;
    margin-bottom: 1.75em;
  }

  .skills-list {
  }

  .skills-list-each {
    padding-bottom: 1.5em;
  }

  .skills-list-each:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Focus = () => {
  return (
    <SkillsStyles>
      <h2 className="sub-header">Focus</h2>
      <p className="skills-paragraph">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a.{" "}
      </p>
      <ul className="skills-list">
        <li className="skills-list-each">JavaScript</li>
        <li className="skills-list-each">React & Gatsby</li>
        <li className="skills-list-each">HTML5</li>
        <li className="skills-list-each">CSS, Sass, & Styled Components</li>
        <li className="skills-list-each">Accessibility</li>
        <li className="skills-list-each">Git</li>
        <li className="skills-list-each">PHP</li>
        <li className="skills-list-each">SQL & GraphQL</li>
        <li className="skills-list-each">GreenSock & Framer Motion</li>
        <li className="skills-list-each">WordPress & Sanity</li>
        <li className="skills-list-each">SEO</li>
        <li className="skills-list-each">Figma</li>
      </ul>
    </SkillsStyles>
  );
};

export default Focus;
