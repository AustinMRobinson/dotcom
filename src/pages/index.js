import tw from "twin.macro"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import styled from "@emotion/styled"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { TitleLg, Title, SubtitleLg, Subtitle } from "../components/typography"

const Wrapper = tw.div`
  flex flex-col min-w-full min-h-screen
`

const Main = tw.div`
`

const Header = styled.header`
  ${tw`py-12`}
  nav {
    ${tw`flex items-center justify-between`}
  }
`

const Container = styled.div`
  ${tw`
    container mx-auto px-6
  `}
  /* Need to add max-width of 1024px here... */
  /* max-width: 1024px; */
`

const NavLogo = styled.a`
  ${tw`
    w-12 h-12 p-2 rounded-full flex items-center justify-center cursor-pointer
  `}
  &:hover {
    svg {
      ${tw`transition ease-in-out duration-300`}
      fill: var(--foreground-75);
    }
  }
  svg {
    fill: var(--foreground-50);
    ${tw`w-full h-full`}
  }
`

const NavMenu = styled.div`
  ${tw`flex space-x-4`}
  a {
    ${tw`px-4 py-2 rounded-lg text-sm font-semibold transition ease-in-out duration-300`}
    color: var(--mid-foreground);
    &:hover {
      color: var(--foreground);
      background: var(--bg3);
    }
  }
`

const Intro = styled.section`
  ${tw`sm:py-12 md:py-24 lg:py-40`}
  .intro-wrapper {
    ${tw`flex flex-col-reverse lg:flex-row items-center lg:space-x-32 text-center lg:text-left`}
    .leading {
      ${tw`w-full lg:w-2/3 flex flex-col space-y-2 lg:space-y-4`}
    }
    .trailing {
      ${tw`w-1/2 lg:w-1/3 h-48 md:h-64 mb-8 lg:mb-0 rounded-lg overflow-hidden`}
      background: var(--bg3);
      img {
        ${tw`w-full h-full object-cover`}
      }
    }
  }
`

const Featured = styled.section`
  ${tw`py-20 lg:py-12`}
  .featured-wrapper {
    ${tw`flex flex-col p-6 lg:p-10 space-y-4 lg:space-y-8 rounded-lg`}
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

const CTAs = styled.section`
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

const Footer = tw.footer`
  mt-6 text-center
`

const Button = styled.button`
  ${tw`px-4 py-2 rounded font-semibold cursor-pointer transition ease-in-out duration-300`}
  color: var(--bg);
  background: var(--foreground);
`

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
    <ThemeToggler>
      {() => (
      <Wrapper>
        <SEO title="Home" />
        <Main>

          <Header>
            <Container>
              <nav>
                <NavLogo href="#">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.75 0H2C0.89543 0 0 0.89543 0 2V26.5625H26.75C34.0625 26.5625 40 20.625 40 13.3125C40 6 34.0625 0 26.75 0Z"/>
                    <path d="M0 2.85723V38.0001C0 39.1046 0.895431 40.0001 2 40.0001H36.9822C38.0959 40.0001 38.6536 38.6536 37.8661 37.8662L20 20.0001L0.58 0.590088V0.590088C0.209346 0.947905 0 1.44098 0 1.95616V2.85723Z"/>
                  </svg>
                </NavLogo>
                <NavMenu>
                  <a href="#">Testing</a>
                  <a href="#">Testing</a>
                  <a href="#">Testing</a>
                </NavMenu>
              </nav>
            </Container>
          </Header>

          <Intro>
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

          <Featured>
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

          <CTAs>
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

          <Footer>
          </Footer>
        </Main>
      </Wrapper>
      )}
    </ThemeToggler>
  )
}

export default Index