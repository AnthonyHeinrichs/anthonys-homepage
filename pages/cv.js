import { Container, Box, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Cv = () => {

  return (
    <Container>
      <Box display={{ md: 'flex' }} mt={100}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            CV
          </Heading>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <Paragraph>
          After working with developers for 5 years, I realized I wanted to become one.
          I like working on amazing teams, learning, solving problems, and seeing the result of my work first-hand.
          I recently finished the Le Wagon web development boot camp, and I am looking for a position as a junior full stack developer.
        </Paragraph>
        <Heading as='h3' variant='section-title'>
          Projects
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem metus,
          accumsan eget neque vel, porta tincidunt erat. Vestibulum pulvinar molestie tellus,
          sit amet accumsan justo luctus eu. Sed porttitor nibh neque, vel auctor turpis semper nec.
        </Paragraph>
        <Heading as='h3' variant='section-title' mt={8} mb={8}>
          Skills
        </Heading>
      </Section>
    </Container>
  )
}

export default Cv
