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
    ${tw`pt-12 pb-8 md:pb-12 text-center`}
    div {
        ${tw`flex flex-col space-y-4`}
    }
`

const BlogContent = styled.section`
    ${tw`pt-8 pb-16`}
    ${SmallContainer} {
        div {
            /* ${tw`prose`} */
        }
        h1, h2 {
            /* font-weight: 600; */
            margin-top: 2rem;
        }
        h1 {
            ${tw`text-2xl md:text-3xl font-medium leading-tight mb-2 tracking-tight`}
            /* font-size: 2rem; */
            /* margin-bottom: 1rem; */
            &:first-of-type {
                margin-top: 0;
            }
        }
        h2 {
            ${tw`text-lg md:text-xl font-medium leading-tight mb-1 tracking-tight`}
            font-size: 1.5rem;
            /* margin-bottom: 0.75rem; */
        }
        p {
            margin-bottom: 0.75rem;
            color: var(--foreground-75);
            a {
                text-decoration: underline;
            }
        }
    }
`

const BlogTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout title={post.frontmatter.title}>
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