import tw from "twin.macro"
import React from "react"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "../components/layout";

const Heading = styled.h1`
  ${tw`text-2xl`}
`

const Text = styled.p`
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
          <div>
            <Heading>Oops!</Heading>
            <Text>We can't find the page that you are looking for..</Text>
          </div>
        </Container>
      </FourOFour>
  </Layout>
)
