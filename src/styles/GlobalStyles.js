import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #895CC6;
    --black: #151415;
    --lightpurple: #C4ADE2;
    --white: #FCFCFC;
    --gray: #C4C4C4;
    --paragraph: #696969;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  html {
    box-sizing: border-box;
  }
  *,
*::before,
*::after {
  box-sizing: inherit;
}

  body {
  }
  fieldset {
  
  }
  button {
 
    cursor: pointer;
 
    &:hover {
      
    }
  }

  .gatsby-image-wrapper img[src*=base64] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }


  img {
    max-width: 100%;
    height: auto;
  }

  .page-breakup {
    width: 35%;
    border-top: 3px solid var(--purple);
    margin-top: 4.5em;
  }
 /*
 * Hide only visually, but have it available for screen readers:
 * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 *
 * 1. For long content, line feeds are not interpreted as spaces and small width
 *    causes content to wrap 1 word per line:
 *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
 */
.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  /* 1 */
}
/*
 * Extends the .sr-only class to allow the element
 * to be focusable when navigated to via the keyboard:
 * https://www.drupal.org/node/897638
 */
.sr-only.focusable:active,
.sr-only.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  white-space: inherit;
  width: auto;
}
/*
 * Hide visually and from screen readers, but maintain layout
 */




`;

export default GlobalStyles;
