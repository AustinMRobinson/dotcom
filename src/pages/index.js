import tw from "twin.macro"
import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import { TitleLg, Title, SubtitleLg, Subtitle } from "../components/typography"

const Container = styled.div`
  ${tw`
    container mx-auto px-4 md:px-6
  `}
  /* Need to add max-width of 1024px here... */
  /* max-width: 1024px; */
`

const Intro = styled(motion.section)`
  ${tw`py-10 md:py-20 lg:py-40`}
  .intro-wrapper {
    ${tw`flex flex-col-reverse lg:flex-row items-center lg:space-x-32 text-center lg:text-left`}
    .leading {
      ${tw`w-full lg:w-2/3 flex flex-col space-y-2 lg:space-y-4`}
    }
    .trailing {
      ${tw`flex flex-col justify-center w-1/2 lg:w-1/3 h-32 md:h-64 mb-8 lg:mb-0 rounded-lg overflow-hidden`}
      background: var(--bg3);
      img {
        ${tw`w-full h-full object-cover`}
      }
    }
  }
`

const Featured = styled(motion.section)`
  ${tw`py-8 lg:py-12`}
  .featured-wrapper {
    ${tw`flex flex-col p-4 lg:p-10 space-y-2 lg:space-y-8 rounded-lg`}
    background: var(--bg2);
    .featured-items {
      ${tw`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8`}
    }
  }
`

const FeaturedItem = styled.a`
  ${tw`w-full lg:w-1/2 p-6 h-64 flex flex-col justify-between rounded-lg cursor-pointer transition ease-in-out duration-300 hover:shadow-xl`}
  background: var(--bg3);
  ${Title} {
    ${tw`font-normal`}
  }
  .tags {
    ${tw`flex space-x-2`}
  }
`

const Tag = styled.a`
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

const CTAItem = styled.a`
  ${tw`w-full lg:w-1/3 p-8 flex flex-col rounded-lg`}
  background: var(--bg2);
  ${Subtitle} {
    ${tw`mb-8`}
  }
`

const Button = styled.button`
  ${tw`px-4 py-2 rounded font-semibold cursor-pointer transition ease-in-out duration-300`}
  color: var(--bg);
  background: var(--foreground);
`


const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
          duration: 0.4,
          ease: easing
      }
    }
};

const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 0.4,
          ease: easing
      }
    }
};

const Index = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "prof-pic.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <Intro variants={fadeIn}>
          <Container>
            <div className="intro-wrapper">
              <div className="leading">
                <TitleLg>Hi, I’m Austin</TitleLg>
                <SubtitleLg>I am a software designer and developer living in Houston, Texas. Currently, I am leading the design for our design system at HP and moonlighting as a front-end developer at Paper Crowns.</SubtitleLg>
              </div>
              <div className="trailing">
                <Img fluid={data.file.childImageSharp.fluid} alt="Austin standing looking relatively happy" draggable="false"/>
              </div>
            </div>
          </Container>
        </Intro>

        <Featured variants={fadeInUp}>
          <Container>
            <div className="featured-wrapper">
              <Title bold>Featured projects</Title>
              <div className="featured-items">
                <FeaturedItem>
                  <div>
                    <Title>Redesigning and scaling a design system across HP</Title>
                    <Subtitle>Design Lead<span> • </span>Jul 2019 - Mar 2020</Subtitle>
                  </div>
                  <div className="tags">
                    <Tag>Design</Tag>
                    <Tag>Design Systems</Tag>
                  </div>
                </FeaturedItem>
                <FeaturedItem>
                  <div>
                    <Title>Building a flexible design system to meet varying business needs</Title>
                    <Subtitle>Design Lead<span> • </span>Jul 2019 - Mar 2020</Subtitle>
                  </div>
                  <div className="tags">
                    <Tag>Design</Tag>
                    <Tag>Design Systems</Tag>
                  </div>
                </FeaturedItem>
              </div>
            </div>
          </Container>
        </Featured>

        <CTAs variants={fadeIn}>
          <Container>
            <div className="ctas-wrapper">
              <Title bold>Take a deep dive</Title>
              <div className="cta-items">
                <CTAItem>
                  <div>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
                <CTAItem>
                  <div>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
                <CTAItem>
                  <div>
                    <Title>My work</Title>
                    <Subtitle>Check out the projects that I have worked on, designing and developing software</Subtitle>
                  </div>
                  <Button>Check it out</Button>
                </CTAItem>
              </div>
            </div>
          </Container>
        </CTAs>
      </Layout>
  )
}

export default Index