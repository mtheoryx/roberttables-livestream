module.exports = {
  siteMetadata: {
    title: `Ruh-burtables`,
    description: `Online destination for roberttables twitch stream and community to learn and grow together`,
    author: `David Poindexter`,
    navLinks: [
      { name: "schedule", link: "/schedule" },
      { name: "stream notes", link: "/stream-notes" },
      { name: "events", link: "/events" },
      { name: "contributors", link: "/contributors" },
      { name: "equipment", link: "/equipment" },
      { name: "resources", link: "/resources" },
      { name: "articles", link: "/articles" },
      { name: "contact", link: "/contact" },
    ],
  },
  plugins: [
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
