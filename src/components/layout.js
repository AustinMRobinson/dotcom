import tw from "twin.macro"
// import React, { useState }  from "react"
import React  from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import SEO from "../components/seo"

import styled from "@emotion/styled"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import {stagger} from "../animations/animations"

const Header = styled.header`
  ${tw`py-5 lg:py-12 relative lg:static`}
  nav {
    ${tw`flex items-center justify-between`}
  }
`

const Container = styled.div`
  ${tw`
    container mx-auto px-4 md:px-6
  `}
`

const NavLogo = styled(Link)`
  ${tw`
    w-12 h-12 p-2 flex items-center justify-center cursor-pointer
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

const MenuWrapper = tw.div`
  p-4 lg:p-0 inset-0 fixed lg:static w-full h-screen lg:w-auto lg:h-auto hidden lg:flex flex-col z-10
`

// const NavMenu = styled.div`
//   ${tw`p-6 lg:p-0 rounded-lg w-full h-full lg:w-auto lg:h-auto flex flex-col justify-center lg:justify-start text-center lg:text-left lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:bg-transparent`}
//   background: var(--bg-75);
//   backdrop-filter: blur(1rem);
//   a {
//     ${tw`px-6 py-4 lg:px-4 lg:py-2 rounded-lg text-lg lg:text-sm font-semibold transition ease-in-out duration-300`}
//     color: var(--mid-foreground);
//     &:hover {
//       color: var(--foreground);
//       background: var(--bg3);
//     }
//   }
//   .active {
//     color: var(--foreground);
//   }
// `


// const StyledBurger = styled(motion.button)`
//   ${tw`w-12 h-12 p-2 flex flex-col items-center justify-center space-y-2 cursor-pointer`}
//   span {
//     ${tw`w-8 h-01 transition ease-in-out duration-300`}
//     background: var(--mid-foreground);
//   }
//   &:hover {
//     span {
//       background: var(--foreground);
//     }
//   }
// `

// const Path = props => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="1"
//     stroke="var(--mid-foreground)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 }
//   }
// };

// const Burger = ({ setIsOpen }) => {
//   return (
//     <StyledBurger onClick={() => setIsOpen(open => !open)}>
//       <svg width="23" height="23" viewBox="0 0 23 23">
//         <Path
//           variants={{
//             hidden: { d: "M 2 2.5 L 20 2.5" },
//             visible: { d: "M 3 16.5 L 17 2.5" }
//           }}
//         />
//         <Path
//           d="M 2 9.423 L 20 9.423"
//           variants={{
//             hidden: { opacity: 1 },
//             visible: { opacity: 0 }
//           }}
//           transition={{ duration: 0.1 }}
//         />
//         <Path
//           variants={{
//             hidden: { d: "M 2 16.346 L 20 16.346" },
//             visible: { d: "M 3 2.5 L 17 16.346" }
//           }}
//         />
//       </svg>
//     </StyledBurger>
//   )
// }

// const Footer = styled.footer`
//   ${tw`mt-6`}
//   .footer-wrapper {
//     ${tw`py-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center border-t space-y-12 lg:space-y-0`}
//     border-color: var(--bg3);
//     .leading {
//       ${tw`w-full lg:w-auto flex flex-col lg:flex-row space-x-0 lg:space-x-4 text-center lg:text-left`}
//       a {
//         ${tw`px-6 py-4 lg:px-4 lg:py-2 rounded-lg text-lg lg:text-sm font-semibold transition ease-in-out duration-300`}
//         color: var(--mid-foreground);
//         &:hover {
//           color: var(--foreground);
//           background: var(--bg3);
//         }
//       }
//     }
//     .trailing {
//       ${tw`flex items-center space-x-8 lg:space-x-4`}
//     }
//   }
// ` 

// const SocialLink = styled.a`
//   ${tw`flex items-center justify-center w-12 h-12 lg:w-8 lg:h-8 rounded-lg transition ease-in-out duration-300`}
//   div {
//     ${tw`w-4 h-4 rounded`}
//     background: var(--mid-foreground);
//   }
//   &:hover {
//     background: var(--bg3);
//     div {
//       background: var(--foreground);
//     }
//   }
// `

const Wrapper = styled(motion.div)`
  ${tw`flex flex-col min-w-full min-h-screen`}
`

const Main = styled(motion.div)`
  ${tw`flex-grow`}
`

const Layout = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

    return (
        <ThemeToggler>
        {() => (
        <Wrapper exit={{ opacity: 0 }} initial="initial" animate="animate">
          <SEO title={props.title} />
  
            <Header>
              <Container>
                <nav>
                  <NavLogo to="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.75 0H2C0.89543 0 0 0.89543 0 2V26.5625H26.75C34.0625 26.5625 40 20.625 40 13.3125C40 6 34.0625 0 26.75 0Z"/>
                      <path d="M0 2.85723V38.0001C0 39.1046 0.895431 40.0001 2 40.0001H36.9822C38.0959 40.0001 38.6536 38.6536 37.8661 37.8662L20 20.0001L0.58 0.590088V0.590088C0.209346 0.947905 0 1.44098 0 1.95616V2.85723Z"/>
                    </svg>
                  </NavLogo>
                  <MenuWrapper>
                    {/* <NavMenu>
                        <motion.div initial={false} animate={isOpen ? "visible" : "hidden"}>
                          <Burger setIsOpen={setIsOpen} />
                        </motion.div>
                        <Link to="/work">Work</Link>
                        <Link to="/lkdsnf">Blog</Link>
                        <Link to="/">About Me</Link>
                    </NavMenu> */}
                  </MenuWrapper>
                </nav>
              </Container>
            </Header>

            <Main variants={stagger}>
                { props.children }
            </Main>

            {/* <Footer>
              <Container>
                <div className="footer-wrapper">
                  <div className="leading">
                    <Link to="/">Home</Link>
                    <Link to="/work">Work</Link>
                    <Link to="">Blog</Link>
                    <Link to="">About Me</Link>
                    <Link to="">Photography</Link>
                  </div>
                  <div className="trailing">
                    <SocialLink href=""><div></div></SocialLink>
                    <SocialLink href=""><div></div></SocialLink>
                    <SocialLink href=""><div></div></SocialLink>
                  </div>
                </div>
              </Container>
            </Footer> */}

        </Wrapper>
        )}
        </ThemeToggler>  
    )
}

export default Layout