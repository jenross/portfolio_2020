import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

  body {
    font-family: sofia-pro, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-display: swap;
  }

  p, li {
    letter-spacing: 0.5px;
    line-height: 1.7em;
    color: var(--paragraph);
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

  .inline-block {
    display: inline-block;
  }

  .block {
    display: block; 
  }
  
`;

export default Typography;
