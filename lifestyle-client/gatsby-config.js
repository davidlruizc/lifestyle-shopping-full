module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Lifestyle Shopping`,
    author: {
      name: `Team Queso`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    'gatsby-plugin-tslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
  ],
};
