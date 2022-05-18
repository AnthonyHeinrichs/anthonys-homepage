import { Container, Box, Heading, AspectRatio, Link, Image } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Projects = () => {

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={16}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Projects
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Link href='https://www.dish-list.com/' isExternal>
            <Heading as='h3' variant='section-title' mt={6}>
              Dish List
            </Heading>
          </Link>
          <Box mb={2}>
            <em> Ruby - Rails - HTML - Sass - PostgreSQL - Heroku </em>
          </Box>
          <Paragraph>
            Dish List was a collaborative project that was built during the last two weeks as a Web Developer student at Le Wagon.
            I came up with the idea of building a web application for finding authentic food by the specific dish in your
            local area, and built this web application with the help of two other developers over a period of two weeks.
          </Paragraph>
          <AspectRatio maxW='500px' ratio={4 / 3} mt={6} mb={2}>
            <iframe
              title='Dish List'
              src='https://www.youtube.com/embed/2uIrUrGG89c?start=2129'
              allowFullScreen
            />
          </AspectRatio>

        </Section>
        <Section delay={0.1}>
        <Link href='https://my-travel-journal-fawn.vercel.app/' isExternal>
          <Heading as='h3' variant='section-title' mt={8}>
            Travel Journal
          </Heading>
        </Link>
          <Box mb={2}>
            <em> React - JSX - CSS </em>
          </Box>
          <Paragraph>
            Basic travel journal I built one morning to document all the different places I have traveled to while living in Europe.
          </Paragraph>
          <Image src='/images/travel-journal.jpg' alt='My Travel Journal' mt={6} mb={2}/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
