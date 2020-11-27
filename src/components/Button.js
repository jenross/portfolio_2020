import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ButtonStyles = styled.button`
  display: block;
  margin-bottom: 1em;
  background-color: var(--purple);
  width: 50%;
  padding: 0.5em 1em;
  color: var(--white);
  border-radius: 3px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.09);
  font-size: 1.3rem;
  border: none;
  font-weight: semi-bold;
  letter-spacing: 1px;
  &:hover {
    background-color: #a685d4;
    transform: translateY(-1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Button = ({ children }) => {
  return <ButtonStyles>{children}</ButtonStyles>;
};

export default Button;
