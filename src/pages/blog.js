import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Layout, ArticlePreview } from 'components'
import { SimpleGrid, Box } from '@chakra-ui/core'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Box bg="gray.900" color="white" className="wrapper">
            {/* <h2 className="section-headline">Recent articles</h2> */}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
              {posts.map(({ node }) => {
                return (
                  <Box key={node.slug}>
                    <ArticlePreview article={node} />
                  </Box>
                )
              })}
            </SimpleGrid>
          </Box>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
