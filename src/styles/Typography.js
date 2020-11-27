import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  html {
    font-family: sofia-pro, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  body {
    line-height: 1.7;
  }

  p, li {
    letter-spacing: 0.5px;
 
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  .center {
    text-align: center;
  }

  .purple {
    color: var(--purple);
  }
  
`;

export default Typography;
