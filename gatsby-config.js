require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Break Tales',
    siteUrl: 'https://breaktales.life'
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-alias-imports',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.title,
                  url: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug,
                  guid: edge.node.id
                })
              })
            },
            query: `
              {
                allContentfulBlogPost {
                  edges {
                    node {
                      id
                      title
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "BreakTales.Life RSS Feed",
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
