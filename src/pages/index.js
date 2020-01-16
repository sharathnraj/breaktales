import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Layout, Hero, ArticlePreview, PersonPreview } from 'components'
import { Box } from '@chakra-ui/core'

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
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </Box>
          <Box bg="red.900" color="white" className="wrapper">
            <h2 className="section-headline">About us</h2>
            <ul className="article-list">
              {persons.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <PersonPreview person={node} />
                  </li>
                )
              })}
            </ul>
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
