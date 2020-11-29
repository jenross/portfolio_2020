import React from "react";
import styled from "styled-components";
import "normalize.css";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const LayoutStyles = styled.div`
  padding: 1.5em;
  margin: auto;
  min-height: 100vh;
  @media (min-width: 625px) {
    padding: 1.5em 3.5em;
    
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Nav />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
}
