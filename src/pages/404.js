import tw from "twin.macro"
import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import SEO from "../components/seo"
import Layout from "../components/layout";
import {stagger, fadeInUp} from "../animations/animations"

const Heading = styled(motion.h1)`
  ${tw`text-2xl`}
`

const Text = styled(motion.p)`
  ${tw`text-xl`}
  color: var(--mid-foreground);
`

const Container = styled.div`
  ${tw`
    container mx-auto px-6
  `}
`

const FourOFour = styled.section`
  ${tw`py-24 text-center`}
  ${Container} {
    ${tw`flex items-center justify-center`}
  }`

export default () => (
  <Layout>
    <SEO title="Page Not Found" />
      <FourOFour>
        <Container>
          <motion.div variants={stagger}>
            <Heading variants={fadeInUp}>Oops!</Heading>
            <Text variants={fadeInUp}>We can't find the page that you are looking for..</Text>
          </motion.div>
        </Container>
      </FourOFour>
  </Layout>
)
