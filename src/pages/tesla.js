import tw from "twin.macro"
import React from "react"
import { motion } from "framer-motion"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { variant } from 'styled-system'

import Layout from "../components/layout"
import Container from "../components/container"
import { Subtitle, SubtitleLg, Title, TitleMd, TitleLg, MotionTitleLg, } from "../components/typography"
import { fadeStagger, fadeIn, fadeInUp } from "../animations/animations"


const Intro = styled(motion.section)`
    ${tw`pt-10 md:pt-16 md:pb-8 lg:pt-24 lg:pb-12`}
    .intro-wrapper {
        > .top {
            ${tw`mb-8 lg:mb-12`}
            ${MotionTitleLg} {
                ${tw`text-center`}
            }
        }
        .questions {
            ${tw`rounded-lg divide-y`}
            background: var(--bg2);
            .question {
                ${tw`p-4 md:p-8 lg:p-10`}
                border-color: var(--light-bg);
                .top {
                    ${tw`mb-4 lg:mb-6 flex items-center`}
                    .leading {
                        ${tw`rounded-full overflow-hidden flex items-center justify-center p-4 w-12 h-12 lg:w-16 lg:h-16 mr-4 text-xl md:text-2xl lg:text-3xl font-medium`}
                        background: var(--bg);
                        color: var(--mid-foreground);
                    }
                    .trailing {
                        ${Title} {
                            ${tw`mb-0`}
                        }
                    }
                }
                .bottom {
                    ${tw`flex items-start md:items-center flex-col md:flex-row`}
                    .leading {
                        ${tw`h-24 w-24 md:h-32 md:w-32 mr-6 flex-shrink-0 mb-4 md:mb-0`}
                        background: var(--bg);
                        img {
                            ${tw`rounded-lg`}
                        }
                    }
                    .trailing, .cta {
                        ${SubtitleLg} {
                            ${tw`mb-1 md:mb-2`}
                            color: var(--foreground);
                        }
                    }
                    .cta-wrapper {
                        ${tw`flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6`}
                        .cta {
                            ${tw`w-full lg:w-1/2 p-4 md:p-6 lg:p-8 rounded-lg flex flex-col`}
                            background: var(--bg3);
                            ${Subtitle} {
                                ${tw`mb-2 md:mb-4 flex-grow`}
                            }
                        }
                    }
                }
            }
        }
    }
`

const Experience = styled(motion.section)`
    ${tw`py-8 lg:py-12 overflow-hidden md:overflow-auto`}
    .experience-wrapper {
        .top {
            ${TitleMd} {
                ${tw`mb-6 lg:mb-10`}
            }
        }
        .experience {
            > .top {
                ${tw`flex space-x-6 mb-1 lg:mb-2`}
                .title {
                    ${tw`w-1/2 p-2 lg:p-4 rounded-lg`}
                    background: var(--bg2);
                    ${SubtitleLg} {
                        color: var(--foreground);
                    }
                    ${Subtitle} {
                        ${tw`text-sm md:text-base`}
                    }
                }
            }
            > .bottom {
                ${tw`divide-y`}
                .experience-item {
                    ${tw`flex items-start space-x-6 py-6`}
                    border-color: var(--light-bg);
                    .leading, .trailing {
                        ${tw`w-1/2`}
                        ul {
                            ${tw`list-disc ml-6 lg:ml-8 space-y-4`}
                            min-width: 12rem;
                        }
                    }
                }
            }
            @media screen and (max-width: 576px) {
                overflow-x: scroll;
                margin: 0 -1.5rem;
                padding: 0 1.5rem;
                > .top, > .bottom {
                    .title, .experience-item .leading, .experience-item .trailing {
                        ${tw`w-3/4 flex-shrink-0`}
                        min-width: 14rem;
                    }
                    .title:nth-of-type(2), .experience-item .trailing {
                        ${tw`mr-6`}
                    }
                }
            }
        }
    }
`

const Recommendations = styled(motion.section)`
    ${tw`py-8 lg:py-12`}
    .recommendation-wrapper {
        > .top {
            ${tw`mb-6 lg:mb-10`}
            ${TitleMd} {
                ${tw`mb-2`}
            }
        }
        > .recommendations {
            ${tw`space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 flex flex-col lg:flex-row`}
            .recommendation {
                ${tw`w-full lg:w-1/2 flex flex-col md:flex-row p-4 lg:p-8 rounded-lg space-x-0 md:space-x-4 space-y-4 md:space-y-0`}
                background: var(--bg2);
                .leading {
                    ${tw`rounded-full flex items-center justify-center p-4 pt-6 w-8 h-8 lg:w-12 lg:h-12 text-2xl lg:text-3xl font-medium flex-shrink-0`}
                    background: var(--bg);
                    color: var(--mid-foreground);
                    min-width: 2.5rem;
                }
                .trailing {
                    ${tw`flex-shrink`}
                    .top {
                        ${tw`mb-2 md:mb-4`}
                        ${SubtitleLg} {
                            ${tw`leading-tight`}
                            color: var(--foreground);
                        }
                        ${Subtitle} {
                            ${tw`text-sm leading-tight`}
                        }
                    }
                    .bottom {
                        ${Subtitle} {
                            color: var(--foreground);
                        }
                    }
                }
            }
        }
    }
`

const Featured = styled(motion.section)`
  ${tw`py-8 lg:py-12`}
  .top {
        ${TitleMd} {
            ${tw`mb-4 lg:mb-8`}
        }
    }
  .featured-wrapper {
    ${tw`flex flex-col p-4 lg:p-10 space-y-2 lg:space-y-4 rounded-lg`}
    background: var(--bg2);
    .header {
        ${tw`pt-2 pb-3 lg:pt-1 lg:pb-2`}
        .info {
            ${Title} {
                ${tw`mb-0`}
            }
        }
    }
    .featured-items {
      ${tw`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8`}
    }
  }
`

const StyledFeaturedItem = styled(motion.div)`
  ${tw`p-6 h-48 lg:h-64 flex flex-col justify-between rounded-lg cursor-pointer`}
  background: var(--bg3);
  width: 100%;
  ${Title} {
    ${tw`font-normal`}
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

const Contact = styled(motion.section)`
    ${tw`py-8 lg:py-12`}
    .contact-wrapper {
        ${tw`flex flex-col items-center`}
        .top {
            ${tw`mb-3 lg:mb-5`}
        }
        .bottom {
            ${tw`flex flex-col space-y-3`}
            .email, .others {
                ${tw`w-full`}
                a {
                    ${tw`h-auto`}
                }
            }
            .email {
                a {
                    ${tw`w-full`}
                    button {
                        ${tw`w-full`}
                    }
                }
            }
            .others {
                ${tw`space-y-3 md:space-y-0 space-x-0 md:space-x-3`}
                a {
                    ${tw`w-full md:w-auto`}
                    button {
                        ${tw`w-full md:w-auto mb-3 md:mb-0`}
                    }
                }
            }
        }
    }
`

const Footer = styled.footer`
    ${tw`py-8 mt-12 md:mt-16`}
    .footer-wrapper {
        ${tw`text-center`}
        ${Subtitle} {
        }
    }
`

// const StyledButton = styled(motion.button)`
//   ${tw`px-5 py-3 lg:px-4 lg:py-2 inline-flex rounded-lg font-semibold cursor-pointer`}
//   color: var(--bg);
//   background: var(--foreground);
// `

const MotionButton = styled(motion.button)``

const StyledButton = styled(MotionButton)(
    {
        color: 'var(--bg)',
        background: 'var(--foreground)',
        padding: '0.75rem 1.25rem',
        borderRadius: '0.75rem',
        display: 'inline-flex',
        fontWeight: '600',
        cursor: 'pointer',
        justifyContent: 'center',
    },
    variant({
        variants: {
          primary: {
            color: 'var(--bg)',
            bg: 'var(--foreground)',
          },
          secondary: {
            color: 'var(--foreground)',
            bg: 'var(--bg2)',
          },
        }
    })
)

const Button = ({ children, variant }) => {
  return (
    <StyledButton
        variant={variant}
        whileHover={{
            scale: 1.0125,
        }}
        whileTap={{ 
            scale: .975,
        }}
    >
        { children }
    </StyledButton>
  )
}

const Tesla = ({ data }) => {

    const pageData = {
        intro: {
            title: 'Hello Tesla!',
            questions: [
                {
                    number: '1',
                    title: 'Who are you?',
                    image: data.file.childImageSharp.fluid,
                    imageAlt: 'Austin standing looking relatively happy',
                    subtitle: 'My name is Austin Robinson',
                    description: 'I am a software designer living in Houston, Texas. Currently, I lead the design for our design system at HP and moonlight as a front-end developer at Paper Crowns.',
                },
                {
                    number: '2',
                    title: 'And.. what do you want?',
                    subtitle: 'Well, I’d love to come work for you.',
                    description: 'This is my application for the role of Senior UX Designer, Tesla Design System. I have been a huge fan of Tesla for many years now. I remember seeing videos from my favorite YouTube channel, MKBHD, about the Model S and I was in love. I dreamt of the day that I could own such an incredible piece of technology and work for the company driving towards a sustainable future. A few years later in college, I attended a Tesla recruiting event one evening with a good friend of mine, both of us hoping to secure an internship with our dream company. Unfortunately for me, Tesla wasn’t hiring any design internship roles at the time. For years to come, I kept my eye on design-related openings, hoping to find the perfect role at my dream company. I consider this role to be that perfect one.',
                },
                {
                    number: '3',
                    title: 'Do you have what it takes?',
                    subtitle: 'In short, yes.',
                    description: 'Design systems are an area that I am extremely passionate about. I have gained valuable experience in this area over the last few years post-grad. I have been working on our design system at HP since I started, doing it in my free time at the beginning, moving to be fully dedicated to it, and finally becoming the Design Lead for the system when our team began to grow. In that time, I played a key role in an effort to scale the system from being used on a couple of products in one business unit at HP to being the official design system for the company, used across all three business units and countless products. I feel like my experience at HP would translate very well to this job’s requirements and I am up for the task.',
                },
                {
                    number: '4',
                    title: 'What now?',
                    ctas: [
                        {
                            subtitle: 'Still don’t believe me?',
                            description: 'Lets go look at how my experience translates to the job description and what people have had to say about me. Then we can dive into some case studies.',
                            link: '#experience',
                            buttonLabel: 'Take me there',
                        },
                        {
                            subtitle: 'Let me see your work!',
                            description: 'Say no more. Lets go look at some of the case studies I wrote specifically to apply for this role. They are all relevant to design systems.',
                            link: '#work',
                            buttonLabel: 'Take me there',
                        },
                    ]
                },
            ],
        },
        experience: {
            title: 'How my experience translates',
            titles: [
                {
                    title: 'Job Description',
                    subtitle: 'Senior UX Designer - Tesla Design System',
                },
                {
                    title: 'My experience',
                    subtitle: 'Design Lead, Veneer Design System (HP)',
                },
            ],
            experience: [
                {
                    leading: [
                        {
                            description: 'Own, define and promote the design system to teams throughout the company',
                        },
                        {
                            description: 'Able to lead large changes across many organizations',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Drive design definitions as a member of the Core group and Veneer team for the official HP design system: Veneer.',
                        },
                        {
                            description: 'Set overall strategic direction, prioritize initiatives, and ensure brand and product design consistency across the company, with products touching 3+ million users.',
                        },
                        {
                            description: 'Drive grassroots adoption of the system, regularly presenting to groups across the company and working to fit their architectual needs.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Partner with product, engineering and other designers to continually evolve and improve the design system and product experiences',
                        },
                        {
                            description: 'Monitor performance of existing patterns and iterate to improve as necessary',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Communicate with Global Business Unit (GBU) design and development gatekeepers to gather feedback on the system, suggest and contribute to improvements, and help them build product-level libraries that extend upon the global system.',
                        },
                        {
                            description: 'Hold regular standing meetings with gatekeepers to constantly evaluate current system assets.',
                        },
                        {
                            description: 'Examine Figma design library stats to see component usage, namely which components are being detached most often. Then, reach out to designers detaching the most and gather specific feedback on component issues.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Author robust guidelines and documentation by partnering with key stakeholders.',
                        },
                        {
                            description: 'Experience in writing clear and robust documentation',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Rebuilt the Veneer website, centered around quality documentation.',
                        },
                        {
                            description: 'Write documentation to explain system concepts, detail best practices on using the system, and work with GBU gatekeepers to establish organization and product-level documentation.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Partner with engineers to validate correct implementation of patterns.',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Work directly with engineers dedicated to the system to deliver carefully crafted mocks, occasionally provide coded prototypes, perform UI reviews, and communicate with UX architect to ensure quality.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Maintain and evolve the UI Kit for use throughout the company',
                        },
                        {
                            description: 'Provide regular communication of changes, new patterns and components for consumers',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Created and manage the global design system asset libraries, publishing biweekly releases across Figma and Adobe XD.',
                        },
                        {
                            description: 'Releases are communicated formally across multiple channels, with all changes to existing or new libraries documented via changelogs for each.',
                        },
                        {
                            description: 'Any changes or additions are performed based on user feedback or as part of fulfilling the system’s roadmap and backlog.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Lead ongoing reviews to help maintain consistency across products',
                        },
                    ],
                    trailing: [
                        {
                            description: 'On top of weekly meetings with organization and product gatekeepers, also have weekly standing meeting with the HP Brand team to ensure alignment within software and with the brand as a whole.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: 'Knowledge of accessibility best practices, designing for a global audience and a great technical understanding building design systems',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Champion for accessibility across the company, pushing for the newest version of the system to be fully WCAG AA compliant. Also introduced high contrast mode to meet WCAG AA standards.',
                        },
                        {
                            description: 'Currently (2021) working on establishing i18n standards and adapting the system to work for RTL languages.',
                        },
                    ]
                },
                {
                    leading: [
                        {
                            description: '5+ years’ work experience creating, defining and advocating for world-class experiences for mobile, web, vehicle or other digital devices',
                        },
                    ],
                    trailing: [
                        {
                            description: 'Redesigned the entire system from the ground up from Veneer 2 to Veneer 3 to make it more flexible, accessible, scalable across HP, and capable of being multi-platform (Web, iOS, Android, Windows). ',
                        },
                        {
                            description: 'Built design library assets for Veneer Web and established standards for other platforms.',
                        },
                        {
                            description: 'Currently (2021) wrapping up iOS and Android design library to be released in Q2. Windows and macOS to follow.',
                        },
                    ]
                },
            ]
        },
        recommendations: {
            title: 'What people have said',
            subtitle: 'I definitely did not pay them (much) to say this',
            recommendations: [
                {
                    name: 'Courtney McMillan',
                    title: 'Director SSPM Design and Experience at HP',
                    description: 'Austin ALWAYS takes the initiative. Austin’s leadership is unanimously recognized by his peers. I have received numerous requests, from my team and external organizations, to find increased leadership opportunities for Austin. He has taken it upon himself to mentor other designers, share his knowledge and he takes time to understand and share valuable work hacks to the entire HP design community.',
                },
                {
                    name: 'Andrei Garcia',
                    title: 'Product Manager - Veneer Design System at HP',
                    description: 'Austin has been leading the visual design definitions and is an essential member of the core team. He is recognized by users of the design system by the fact that the libraries are comprehensive, easy to learn and use, and for putting so much thought and passion into its creation. All this passion and creativity elevates the whole design system! In addition, his great teamwork and collaboration are present in all interactions with key stakeholders, product designers, visual designers, and so on.',
                },
            ]
        },
        work: {
            title: 'Check out some of my work',
            subtitle: 'Case studies',
            description: "Focused specifically on my time working on HP's design system, Veneer",
        },

    }

    const intro = pageData.intro
    const experience = pageData.experience
    const recommendations = pageData.recommendations
    const work = pageData.work

    return (
        <Layout title="Hello Tesla!">
            <Intro variants={fadeInUp}>
                <Container>
                    <div className="intro-wrapper">
                        <div className="top">
                            <MotionTitleLg>{intro.title}</MotionTitleLg>
                        </div>
                        <div className="questions">
                            {intro.questions.map(question => (
                                <div className="question">
                                    <div className="top">
                                        <div className="leading">{question.number}</div>
                                        <div className="trailing">
                                            <Title bold>{question.title}</Title>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        {question.image && (
                                            <div className="leading">
                                                <Img fluid={question.image} alt={question.imageAlt}></Img>
                                            </div>
                                        )}
                                        {question.subtitle && question.description && (
                                            <div className="trailing">
                                                <SubtitleLg bold>{question.subtitle}</SubtitleLg>
                                                <Subtitle>{question.description}</Subtitle>
                                            </div>
                                        )}
                                        {question.ctas && (
                                        <div className="cta-wrapper">
                                            {question.ctas.map(cta => (
                                                <div className="cta">
                                                    <SubtitleLg bold>{cta.subtitle}</SubtitleLg>
                                                    <Subtitle>{cta.description}</Subtitle>
                                                    <a href={cta.link}>
                                                        <Button secondary="true">{cta.buttonLabel}</Button>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Intro>
            <Experience variants={fadeInUp} id="experience">
                <Container>
                    <div className="experience-wrapper">
                        <div className="top">
                            <TitleMd>{experience.title}</TitleMd>
                        </div>
                        <div className="experience">
                            {experience.titles && (
                                <div className="top">
                                    {experience.titles.map(title => (
                                        <div className="title">
                                            <SubtitleLg bold>{title.title}</SubtitleLg>
                                            <Subtitle>{title.subtitle}</Subtitle>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="bottom">
                                {experience.experience.map(item => (
                                    <div className="experience-item">
                                        {item.leading && (
                                            <div className="leading">
                                                <ul>
                                                    {item.leading.map(item => (
                                                        <li>{item.description}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.trailing && (
                                            <div className="trailing">
                                                <ul>
                                                    {item.trailing.map(item => (
                                                        <li>{item.description}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Experience>
            <Recommendations variants={fadeInUp}>
                <Container>
                    <div className="recommendation-wrapper">
                        <div className="top">
                            <TitleMd>{recommendations.title}</TitleMd>
                            <Subtitle>{recommendations.subtitle}</Subtitle>
                        </div>
                        <div className="recommendations">
                            {recommendations.recommendations.map(recommendation => (
                                <div className="recommendation">
                                    <div className="leading">"</div>
                                    <div className="trailing">
                                        <div className="top">
                                            <SubtitleLg bold>{recommendation.name}</SubtitleLg>
                                            <Subtitle>{recommendation.title}</Subtitle>
                                        </div>
                                        <div className="bottom">
                                            <Subtitle>{recommendation.description}</Subtitle>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Recommendations>
            <Featured variants={fadeInUp} id="work">
                <Container>
                    <div className="top">
                        <TitleMd>{work.title}</TitleMd>
                    </div>
                    <div className="featured-wrapper">
                        <div className="header">
                            <div className="info">
                                <Title bold>{work.subtitle}</Title>
                                <Subtitle>{work.description}</Subtitle>
                            </div>
                        </div>
                        <motion.div variants={fadeStagger} className="featured-items">
                            {data.featuredPosts.edges.map(({ node }) => (
                                <FeaturedItem to={node.fields.slug} key={node.id}>
                                <div>
                                    <Title>{node.frontmatter.title}</Title>
                                    <Subtitle>{node.frontmatter.role}<span> • </span>{node.frontmatter.date}</Subtitle>
                                </div>
                                </FeaturedItem>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </Featured>
            <Contact variants={fadeInUp}>
                <Container>
                    <div className="contact-wrapper">
                        <div className="top">
                            <TitleMd>Contact Me</TitleMd>
                        </div>
                        <div className="bottom">
                            <div className="email">
                                <a href="mailto:austinrobinsondesign@gmail.com"><Button variant="primary">Send me an email</Button></a>
                            </div>
                            <div className="others">
                                <a href="https://drive.google.com/file/d/15cWYOCcbrhd6ufRFvDZDt6jR7HmouIEG/view?usp=sharing" target="_blank"><Button variant="secondary">Resume</Button></a>
                                <a href="https://drive.google.com/file/d/1SbHz95k2E4icn-FpB0J7vlyXYWZsX5Q3/view?usp=sharing" target="_blank"><Button variant="secondary">Cover Letter</Button></a>
                                <a href="https://twitter.com/AustinMRobinson" target="_blank"><Button variant="secondary">Twitter</Button></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Contact>
            <Footer>
                <Container>
                    <div className="footer-wrapper">
                        <Subtitle>
                            If you were curious, I built this website from scratch using React, Gatsby, and Emotion.
                            <br></br>
                            It supports light and dark mode, so switch your system color scheme to see them :)
                        </Subtitle>
                    </div>
                </Container>
            </Footer>
        </Layout>
    )
}

export const query = graphql`
    query profPicAndHpPosts {
        file(relativePath: {eq: "prof-pic.jpg"}) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
        }
        featuredPosts: allMarkdownRemark (
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
                    }
                }
            }
        }
    }
`

export default Tesla