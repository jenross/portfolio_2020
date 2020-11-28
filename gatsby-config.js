const path = require(`path`)

module.exports = {

  siteMetadata: {
    title: `Jennifer Ross' Portfolio`,
    siteUrl: 'https://jenniferross.tech',
    description: 'Jennifer Ross is a full stack developer living in Mount Dora, Florida.'

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

  ],
};