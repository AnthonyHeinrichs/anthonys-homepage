import { Container, Box, Heading, AspectRatio } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Projects = () => {

  return (
    <Container>
      <Box display={{ md: 'flex' }} mt={16}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Projects
          </Heading>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title' mt={6}>
          Dish List
        </Heading>
        <Box mb={6}>
          <em> Ruby - Rails - HTML - Sass - PostgreSQL </em>
        </Box>
        <Paragraph>
          Dish List was a collaborative project that was built during the last two weeks as a Web Developer student at Le Wagon.
          I came up with the idea of building a web application for finding authentic food by the specific dish in your
          local area, and built this web applicatin with the help of two other developers over a period of two weeks.
        </Paragraph>
        <Heading as='h3' variant='section-title' mt={6}>
            Dish List Demo
          </Heading>
        <AspectRatio maxW='500px' ratio={4 / 3} mt={8}>
          <iframe
            title='Dish List'
            src='https://www.youtube.com/embed/2uIrUrGG89c?start=2129'
            allowFullScreen
          />
        </AspectRatio>
      </Section>
    </Container>
  )
}

export default Projects
