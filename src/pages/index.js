import tw from "twin.macro"
import React from "react"
import { motion } from "framer-motion"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import Container from "../components/container"
import { Title, Subtitle, TitleMd, TitleSm, MotionTitleLg, MotionSubtitleLg } from "../components/typography"
import { stagger, fadeStagger, fadeIn, fadeInUp, fadeInDelay, delayedStagger } from "../animations/animations"


const Intro = styled(motion.section)`
  ${tw`pb-0 pt-0 py-10 md:py-20 lg:pt-32 lg:pb-40`}
  .intro-wrapper {
    ${tw`flex flex-col-reverse lg:flex-row items-center lg:space-x-32 text-center lg:text-left`}
    .leading {
      ${tw`w-full lg:w-2/3 flex flex-col space-y-2 lg:space-y-4`}
    }
    .trailing {
      ${tw`flex flex-col justify-center w-48 md:w-1/2 lg:w-1/3 h-48 md:h-64 mb-8 lg:mb-0 rounded-full md:rounded-lg overflow-hidden`}
      background: var(--bg3);
      img {
        ${tw`w-full h-full object-cover`}
      }
    }
  }
`

const ComingSoon = styled(motion.section)`
  ${tw`py-4`}
  .comingsoon-wrapper {
    ${tw`flex flex-col items-center text-center p-8 lg:p-16 space-y-0 lg:space-y-2 rounded-lg`}
    background: var(--bg2);
    ${Subtitle} {
      a {
        color: var(--foreground-75)
      }
    }
  }
`

const Featured = styled(motion.section)`
  ${tw`py-4 lg:py-12`}
  .featured-wrapper {
    ${tw`flex flex-col p-4 lg:p-10 space-y-2 lg:space-y-8 rounded-lg`}
    background: var(--bg2);
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

const CTAs = styled(motion.section)`
  ${tw`py-12 lg:py-24 text-center md:text-left`}
  .ctas-wrapper {
    ${tw`flex flex-col space-y-4 lg:space-y-8`}
    .cta-items {
      ${tw`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8`}
    }
  }
`

const CTAItem = styled(motion.a)`
  ${tw`w-full lg:w-1/3 p-8 flex flex-col items-center md:items-start rounded-lg`}
  background: var(--bg2);
  ${Subtitle} {
    ${tw`mb-8`}
  }
`

const CTAIcon = styled.div`
  ${tw`h-16 w-16 p-2 mb-6 inline-flex items-center justify-center rounded-lg`}
  background: var(--bg3);
  div {
    ${tw`h-10 w-10 rounded`}
    background: var(--light-foreground);
  }
`

const StyledButton = styled(motion.button)`
  ${tw`px-5 py-3 lg:px-4 lg:py-2 inline-flex rounded-lg lg:rounded font-semibold cursor-pointer`}
  color: ${props => props.secondary ? 'var(--bg)' : 'var(--foreground)' };
  background: ${props => props.secondary ? 'var(--foreground)' : 'var(--bg3)'};
`

const Button = ({ children }) => {
  return (
    <StyledButton
      whileHover={{
        scale: 1.0125,
      }}
      whileTap={{ 
        scale: .975,
      }}>
      { children }
    </StyledButton>
  )
}

const WorkGallery = styled(motion.section)`
  ${tw`pt-8 pb-16 lg:pt-12 pb-24`}
  .gallery-wrapper {
    ${tw`flex flex-col text-center`}
    ${TitleMd} {
      ${tw`mb-8 lg:mb-12`}
    }
    .gallery-items {
      ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-20 md:row-gap-16 lg:row-gap-12`}
    }
  }
`

const GalleryItem = styled(motion.div)`
  ${tw`flex flex-col text-center`}
  img {
    ${tw`rounded-lg`}
  }
  .info {
    ${tw`mt-6 mb-4`}
    ${TitleSm} {
      ${tw`mb-0`}
    }
  }
  ${StyledButton} {
    ${tw`w-full justify-center`}
  }
`

const Index = ({ data }) => {

  return (
      <Layout title="Home">
        <Intro>
          <Container>
            <div className="intro-wrapper" >
              <motion.div variants={stagger} className="leading">
                <MotionTitleLg variants={fadeInUp}>Hi, I’m Austin</MotionTitleLg>
                <MotionSubtitleLg variants={fadeInUp}>
                I am a software designer and developer living in Houston, Texas. 
                Currently, I am leading the design for our design system at HP and moonlighting as a front-end developer at Paper Crowns.
                </MotionSubtitleLg>
              </motion.div>
              <motion.div variants={fadeInUp} className="trailing">
                <Img fluid={data.file.childImageSharp.fluid} alt="Austin standing looking relatively happy"></Img>
              </motion.div>
            </div>
          </Container>
        </Intro>

        <WorkGallery variants={fadeInUp}>
          <Container>
            <div className="gallery-wrapper">
              <TitleMd bold>Work gallery</TitleMd>
              <motion.div variants={delayedStagger} className="gallery-items">

                {data.galleryItems.edges.map(({ node }) => (
                  <GalleryItem variants={fadeIn}>
                    <Img fluid={node.frontmatter.cover.childImageSharp.fluid} alt={node.frontmatter.title} draggable="false"/>
                    <div class="info">
                      <TitleSm bold>{node.frontmatter.title}</TitleSm>
                      <Subtitle>{node.frontmatter.role}</Subtitle>
                    </div>
                    <a href={node.frontmatter.link} target="_blank" rel="noreferrer">
                      <Button secondary>Visit Website</Button>
                    </a>
                  </GalleryItem>
                ))}

              </motion.div>
            </div>
          </Container>
        </WorkGallery>

        {/* <ComingSoon variants={fadeInUp}>
          <Container>
            <div className="comingsoon-wrapper">
              <Title bold>Content coming soon</Title>
              <Subtitle>I’m in the process of redesigning my website. <br></br> Follow me on <a href="http://www.twitter.com/austinmrobinson">Twitter</a> to see when I launch it!</Subtitle>
            </div>
          </Container>
        </ComingSoon> */}

        {/* <Featured variants={fadeInUp}>
          <Container>
            <div className="featured-wrapper">
              <Title bold>Featured projects</Title>
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

        <CTAs variants={fadeInDelay}>
          <Container>
            <div className="ctas-wrapper">
              <Title bold>Take a deep dive</Title>
              <motion.div variants={fadeStagger} className="cta-items">
                <CTAItem variants={fadeIn}>
                  <div>
                    <CTAIcon>
                      <div></div>
                    </CTAIcon>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
                <CTAItem variants={fadeIn}>
                  <div>
                    <CTAIcon>
                      <div></div>
                    </CTAIcon>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
                <CTAItem variants={fadeIn}>
                  <div>
                    <CTAIcon>
                      <div></div>
                    </CTAIcon>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
              </motion.div>
            </div>
          </Container>
        </CTAs> */}

      </Layout>
  )
}

export const query = graphql`
  query heroImageAndWorkGallery {
    file(relativePath: {eq: "prof-pic.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryItems: allMarkdownRemark (
      limit: 6
      filter: {fileAbsolutePath: {regex: "\/work-gallery/"}}
    )
    {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            role
            link
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query heroImageAndfeaturedPosts {
//     file(relativePath: {eq: "prof-pic.jpg"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     featuredPosts: allMarkdownRemark (
//       limit: 2
//       filter: {frontmatter: {company: {eq: "HP"}}}
//     )
//     {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//             role
//             tags
//           }
//         }
//       }
//     }
//   }
// `

export default Index