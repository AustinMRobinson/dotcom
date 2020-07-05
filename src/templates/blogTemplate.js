import tw from "twin.macro"
import React from 'react'
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from '../components/layout';

const Container = styled.div`
  ${tw`
    container mx-auto px-4 md:px-6
  `}
`

const BlogHero = styled.section`
    ${tw`py-12`}
`

const BlogTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <BlogHero>
                <Container>
                    <div>
                        {post.frontmatter.title}
                    </div>
                </Container>
            </BlogHero>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogTemplate