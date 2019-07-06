const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Ruh-burtables`,
    description: `Online destination for roberttables twitch stream and community to learn and grow together`,
    author: `David Poindexter`,
    navLinks: [
      { name: "schedule", link: "/schedule" },
      { name: "stream notes", link: "/stream-notes-index" },
      { name: "projects", link: "/projects" },
      { name: "contributors", link: "/contributors" },
      { name: "equipment & software", link: "/equipment-and-software" },
      { name: "resources", link: "/resources" },
      { name: "articles", link: "/articles" },
      { name: "contact", link: "/contact" },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stream-notes-pages`,
        path: `${__dirname}/stream-notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stream-projects-pages`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `equipment-and-software-pages`,
        path: `${__dirname}/equipment-and-software`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
