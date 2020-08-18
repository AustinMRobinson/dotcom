import tw from "twin.macro"
import React from 'react'
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from '../components/layout';

import { TitleMd, SubtitleLg } from "../components/typography"

const Container = styled.div`
  ${tw`
    container mx-auto px-4 md:px-6
  `}
`

const SmallContainer = styled.div`
    ${tw`mx-auto px-4 md:px-6`}
    max-width: 720px;
`

const BlogHero = styled.section`
    ${tw`py-12 text-center`}
    div {
        ${tw`flex flex-col space-y-4`}
    }
`

const BlogContent = styled.section`
    ${tw`py-8`}
    ${SmallContainer} {
        div {
            ${tw`prose`}
        }
    }
`

const BlogTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <BlogHero>
                <Container>
                    <div>
                        <TitleMd>{post.frontmatter.title}</TitleMd>
                        <SubtitleLg>{post.frontmatter.role}<span> l </span> {post.frontmatter.date}</SubtitleLg>
                    </div>
                </Container>
            </BlogHero>

            <BlogContent>
                <SmallContainer>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
                </SmallContainer>
            </BlogContent>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        role
      }
    }
  }
`

export default BlogTemplate