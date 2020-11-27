import React from "react";
import styled from "styled-components";
import "normalize.css";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const LayoutStyles = styled.div`
  padding: 1.5em;
  margin: 0.5em auto;
  min-height: 100vh;
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
