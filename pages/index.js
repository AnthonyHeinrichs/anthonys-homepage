import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Skill from '../components/skill'
import { DiCss3Full, DiReact, DiHtml5, DiJavascript1, DiHeroku, DiPostgresql, DiMongodb, DiRuby, DiRor, DiBootstrap } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

const Page = () => {

  return (
    <Container>
      <Box display={{ md: 'flex' }} mt={100}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Anthony Heinrichs
          </Heading>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
            Fullstack developer based in Berlin.
          </Box>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center' >
          <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/headshot.jpg' alt='Profile Pciture' />
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
          Interests
        </Heading>
        <Paragraph>
          Surfing, snowboarding, skateboarding, volleyball, music, meditation
        </Paragraph>
        <Heading as='h3' variant='section-title' mt={8} mb={8}>
          Skills
        </Heading>
        <SimpleGrid columns={[2]} spacing='16px'>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
            Frontend
            <SimpleGrid columns={[2, null, 3]} spacing='20px'>
              <Box height='60px' mt={6}>
                <Skill logo={<DiCss3Full />}
                  language='CSS'
                  body='Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiHtml5 />}
                  language='HTML'
                  body='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiJavascript1 />}
                  language='Javascript'
                  body='JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiReact />}
                  language='React'
                  body='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiBootstrap />}
                  language='Bootstrap'
                  body='Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.' />
              </Box>
            </SimpleGrid>
          </Box>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
            Backend
            <SimpleGrid columns={[2, null, 3]} spacing='20px'>
              <Box height='60px' mt={6}>
                <Skill logo={<DiRuby />}
                  language='Ruby'
                  body='Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiPostgresql />}
                  language='PostgreSQL'
                  body='PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiMongodb />}
                  language='MongoDB'
                  body='MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiHeroku />}
                  language='Heroku'
                  body='Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<DiRor />}
                  language='Ruby on Rails'
                  body='Ruby on Rails is a server-side web application framework written in Ruby.' />
              </Box>
              <Box height='60px' mt={6}>
                <Skill logo={<SiNextdotjs />}
                  language='Next.js'
                  body='Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.' />
              </Box>
            </SimpleGrid>
          </Box>
          <Box>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  )
}

export default Page;
