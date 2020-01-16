import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Layout, Hero } from 'components'
import { Box } from '@chakra-ui/core'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Hero data={{
            imageSrc: post.heroImage.file.url,
            heading: post.title
          }} />
          <Box bg="gray.900" color="white" className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p style={{ display: 'block' }}>
              {post.publishDate}
            </p>
            {
              post.instagram &&
              <p className="instagram">
                <img src={`https://www.instagram.com/p/${post.instagram}/media/`} />
              </p>
            }
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </Box>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      instagram
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
