import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ButtonSecondaryStyles = styled.button`
  background-color: var(--white);
  width: 40%;
  padding: 0.5em 1em;
  color: var(--purple);
  border-radius: 3px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.09);
  font-size: 1.3rem;
  border: 2px solid var(--purple);
  font-weight: semi-bold;
  letter-spacing: 1px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonSecondary = ({ children }) => {
  return <ButtonSecondaryStyles>{children}</ButtonSecondaryStyles>;
};

export default ButtonSecondary;
