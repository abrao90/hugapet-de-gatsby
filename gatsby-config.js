module.exports = {
  siteMetadata: {
    title: `Hug A Pet`,
    description: `Mobiler Tierartz | Hug A Pet - Deutschland`,
    author: `Hug A Pet - Deutschland`,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f4efc7`,
        theme_color: `#f4efc7`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    { 
    resolve: 'gatsby-soa`urce-firestore',
    options: {
      credential: require("./firebase.json")
    },
  },
  ],
}
