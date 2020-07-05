import tw from "twin.macro"
import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import Layout from "../components/layout";
import Container from "../components/container"
import { Title, Subtitle, MotionTitleLg, TitleMd } from "../components/typography"
import { stagger, fadeStagger, fadeIn, fadeInUp } from "../animations/animations"


const Hero = styled.section`
  ${tw`pt-24 pb-16 text-center`}
  ${Container} {
    ${tw`flex items-center justify-center`}
  }
`

const Featured = styled(motion.section)`
  ${tw`py-4 lg:py-8`}
  .featured-wrapper {
    ${tw`flex flex-col p-4 lg:p-10 space-y-2 lg:space-y-8 rounded-lg`}
    background: var(--bg2);
    .header {
      ${tw`flex items-center space-x-6`}
      .logo {
        ${tw`h-24 w-24 rounded-full flex-shrink-0`}
        background: var(--foreground);
      }
      .info {
        ${tw`flex flex-col`}
      }
    }
    .featured-items {
      ${tw`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8`}
    }
  }
`

const StyledFeaturedItem = styled(motion.div)`
  ${tw`p-6 h-64 flex flex-col justify-between rounded-lg cursor-pointer`}
  background: var(--bg3);
  ${Title} {
    ${tw`font-normal`}
  }
  .tags {
    ${tw`flex space-x-2`}
  }
`

const StyledLink = styled(Link)`
  ${tw`w-full lg:w-1/2`}
`

const FeaturedItem = ({ children, to }) => {
  return (
    <StyledLink to={to}>
      <StyledFeaturedItem
        variants={fadeIn}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 1rem 1.25rem 0 rgba(0,0,0,0.05)"
        }}
        whileTap={{ 
          scale: .975,
          boxShadow: "0 0.25rem 0.75rem 0 rgba(0,0,0,0.025)"
        }}>
          {children}
        </StyledFeaturedItem>
      </StyledLink>
  )
}

const Tag = styled.div`
  ${tw`py-2 px-4 rounded-full uppercase font-semibold text-xs tracking-wide`}
  color: var(--mid-foreground);
  background: var(--bg2);
`

const Gallery = styled(motion.section)`
  ${tw`py-16 lg:py-24`}
  .gallery-wrapper {
    ${tw`flex flex-col`}
    .heading {
      ${tw`text-center`}
    }
  }
  .gallery-items {
    ${tw`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4`}
    div {
      ${tw`h-48 rounded`}
      background: var(--bg3);
    }
  }
`

export default ({ data }) => (
  <Layout title="My work">
      <Hero>
        <Container>
          <motion.div variants={stagger}>
            <MotionTitleLg variants={fadeInUp}>My work</MotionTitleLg>
          </motion.div>
        </Container>
      </Hero>

      <Featured variants={fadeInUp}>
        <Container>
          <div className="featured-wrapper">
            <div className="header">
              <div className="logo"></div>
              <div className="info">
                <TitleMd bold>HP</TitleMd>
                <Subtitle>Read about some of the work I did while working at HP. My projects are all centered around the development and maintenance of our design system.</Subtitle>
              </div>
            </div>
            <motion.div variants={fadeStagger} className="featured-items">

              {data.featuredPosts.edges.map(({ node }) => (
                <FeaturedItem to={node.fields.slug} key={node.id}>
                  <div>
                    <Title>{node.frontmatter.title}</Title>
                    <Subtitle>{node.frontmatter.role}<span> • </span>{node.frontmatter.date}</Subtitle>
                  </div>
                  <div className="tags">
                    {node.frontmatter.tags.map(tag => {
                      return (
                        <Tag key={tag}>{tag}</Tag>
                      )
                    })}
                  </div>
                </FeaturedItem>
              ))}

            </motion.div>
          </div>
        </Container>
      </Featured>

      <Featured variants={fadeInUp}>
        <Container>
          <div className="featured-wrapper">
            <div className="header">
              <div className="logo"></div>
              <div className="info">
                <TitleMd bold>Paper Crowns</TitleMd>
                <Subtitle>Read about some of the work I did while working at Paper Crowns.</Subtitle>
              </div>
            </div>
            <motion.div variants={fadeStagger} className="featured-items">

              {data.featuredPosts.edges.map(({ node }) => (
                <FeaturedItem to={node.fields.slug} key={node.id}>
                  <div>
                    <Title>{node.frontmatter.title}</Title>
                    <Subtitle>{node.frontmatter.role}<span> • </span>{node.frontmatter.date}</Subtitle>
                  </div>
                  <div className="tags">
                    {node.frontmatter.tags.map(tag => {
                      return (
                        <Tag key={tag}>{tag}</Tag>
                      )
                    })}
                  </div>
                </FeaturedItem>
              ))}

            </motion.div>
          </div>
        </Container>
      </Featured>

      <Gallery>
        <Container>
          <div className="gallery-wrapper">
            <div className="heading">
              <TitleMd bold>Project Gallery</TitleMd>
              <Subtitle>Read about some of the work I did while working at Paper Crowns.</Subtitle>
            </div>
            <div className="gallery-items">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Container>
      </Gallery>
      
  </Layout>
)

export const query = graphql`
  query hpPosts {
    featuredPosts: allMarkdownRemark (
      limit: 2
      filter: {frontmatter: {company: {eq: "HP"}}}
    )
    {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            role
            tags
          }
        }
      }
    }
  }
`