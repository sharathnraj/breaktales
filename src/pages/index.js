import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Layout, Hero, ArticlePreview, PersonPreview } from 'components'
import { SimpleGrid, Box } from '@chakra-ui/core'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const persons = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={{
            imageSrc: "home.jpg",
            heading: "Break Tales",
            subHeading: "We're on a break !!",
            description: "Chronicling the (mis)adventures of a techie mini retirement."
          }} />
          <Box bg="gray.900" color="white" className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
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
          <Box bg="red.900" color="white" className="wrapper">
            <h2 className="section-headline">About us</h2>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
              {persons.map(({ node }) => {
                return (
                  <Box key={node.slug}>
                    <PersonPreview person={node} />
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(sort: { fields: [updatedAt], order: ASC }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
