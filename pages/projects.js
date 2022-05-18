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
          <Image src='/images/dish-list.jpg' alt='Dish list' mt={8} mb={2}/>
          <AspectRatio maxW='500px' ratio={4 / 3} mt={8} mb={2}>
            <iframe
              title='Dish List'
              src='https://www.youtube.com/embed/2uIrUrGG89c?start=2129'
              allowFullScreen
            />
          </AspectRatio>
          <Link href='https://my-travel-journal-fawn.vercel.app/' color={'teal'} textDecoration='underline' isExternal>
            View project
          </Link>
        </Section>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title' mt={6}>
            Travel Journal
          </Heading>
          <Box mb={6}>
            <em> React </em>
          </Box>
          <Paragraph>
            Basic travel journal I built one morning to document all the different places I have traveled to while living in Europe.
          </Paragraph>
          <Image src='/images/travel-journal.jpg' alt='My Travel Journal' mt={8} mb={2}/>
          <Link href='https://my-travel-journal-fawn.vercel.app/' color={'teal'} textDecoration='underline' isExternal>
            View project
          </Link>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
