require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

const ghostConfig = {
  development: {
    apiUrl: process.env.GHOST_API_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY,
  },
  production: {
    apiUrl: process.env.GHOST_API_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY,
  },
}

const { apiUrl, contentApiKey } =
  process.env.NODE_ENV === `development`
    ? ghostConfig.development
    : ghostConfig.production

if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
  // eslint-disable-next-line
  throw new Error(
    `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
  )
}

if (
  process.env.NODE_ENV === `production` &&
  config.siteUrl === `http://localhost:8000` &&
  !process.env.SITEURL
) {
  throw new Error(
    `siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`
  )
}

/**
 * This is the place where you can tell Gatsby which plugins to use
 * and set them up the way you want.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */
module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITEURL || config.siteUrl,
  },
  plugins: [
    /**
     *  Dev Plugins
     */
    {
      resolve: `gatsby-plugin-prettier-eslint`,
      options: {
        prettier: {
          patterns: [
            `**/*.{js,jsx,ts,tsx}`,
            `**/*.{css,scss,less}`,
            `**/*.{json,json5}`,
            `**/*.{graphql}`,
            `**/*.{md,mdx}`,
            `**/*.{html}`,
            `**/*.{yaml,yml}`,
          ],
        },
        eslint: {
          patterns: `**/*.{js,jsx,ts,tsx}`,
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    /**
     *  Content Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`,
      },
    },
    // Setup for optimised images.
    // See https://www.gatsbyjs.org/packages/gatsby-image/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-ghost`,
      options:
        process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production,
    },
    // Setup for code syntax highlighting.
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: node => node.internal.type === `GhostPost` ||
          node.internal.type === `GhostPage`,
        plugins: [
          {
            resolve: `gatsby-rehype-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    /**
     *  Utility Plugins
     */
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }
        `,
        feeds: [generateRSSFeed(config)],
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
          {
            allGhostPost {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostPage {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostTag {
              edges {
                node {
                  id
                  slug
                  feature_image
                }
              }
            }
          }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
          },
          allGhostTag: {
            sitemap: `tags`,
          },
          allGhostPage: {
            sitemap: `pages`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    /**
     *  Analytics Plugins
     */
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
  ],
}
