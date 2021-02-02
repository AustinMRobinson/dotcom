import tw from "twin.macro"
import styled from "@emotion/styled"
import { motion } from "framer-motion"


export const TitleLg = tw.h1`
  text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight
`

export const TitleMd = tw.h2`
  text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight
`

export const Title = styled.h2`
  ${tw`text-2xl md:text-3xl leading-tight mb-2 tracking-tight`}
  font-weight: ${props => props.bold ? 600 : 400};
`

export const TitleSm = styled.h3`
  ${tw`text-lg md:text-xl leading-tight mb-1 tracking-tight`}
  font-weight: ${props => props.bold ? 600 : 400};
`

export const SubtitleLg = styled.p`
  ${tw`text-base md:text-lg lg:text-xl`}
  color: var(--mid-foreground);
  font-weight: ${props => props.bold ? 600 : 400};
`

export const Subtitle = styled.p`
  ${tw``}
  color: var(--mid-foreground);
  span {
    ${tw`text-sm`}
  }
`

// Motion ones

export const MotionTitleLg = tw(motion.h1)`
  text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight
`

export const MotionTitle = styled(motion.h2)`
  ${tw`text-2xl md:text-3xl leading-tight mb-2 tracking-tight`}
  font-weight: ${props => props.bold ? 600 : 400};
`

export const MotionSubtitleLg = styled(motion.p)`
  ${tw`text-base md:text-lg lg:text-xl`}
  color: var(--mid-foreground);
`

export const MotionSubtitle = styled(motion.p)`
  ${tw``}
  color: var(--mid-foreground);
  span {
    ${tw`text-sm`}
  }
`