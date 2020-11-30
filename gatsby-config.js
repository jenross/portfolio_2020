const path = require(`path`)

module.exports = {

  siteMetadata: {
    title: `Jennifer Ross | Full Stack Developer`,
    url: 'https://jenniferross.tech',
    description: 'I’m a full stack JavaScript developer and designer living in Sorrento, Florida. I write HTML, CSS and JavaScript, and design with Figma. Right now, I’m focusing on React.js, AWS Lambda (serverless functions), JAMstack architecture, web accessibility, GraphQL, Gatsby, and WordPress (including headless WordPress).',
    twitterUsername: "@itsjenniferross",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'xrr0njk'
        }
      }
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `43386860109`,
    },
  },
  `gatsby-plugin-anchor-links`
  ],
};