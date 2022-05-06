import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from  '../components/paragraph'
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
        <SimpleGrid columns={[2]} spacing='16px'>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
            Frontend
            <SimpleGrid columns={[2, null, 3]} spacing='20px'>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiCss3Full />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>CSS</PopoverHeader>
                  <PopoverBody>Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiHtml5 />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>HTML</PopoverHeader>
                  <PopoverBody>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiJavascript1 />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Javascript</PopoverHeader>
                  <PopoverBody>JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>React</PopoverHeader>
                  <PopoverBody>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiBootstrap />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Bootstrap</PopoverHeader>
                  <PopoverBody>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
            </SimpleGrid>
          </Box>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
              Backend
              <SimpleGrid columns={[2, null, 3]} spacing='20px'>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiRuby />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Ruby</PopoverHeader>
                  <PopoverBody>Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiPostgresql />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>PostgreSQL</PopoverHeader>
                  <PopoverBody>PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiMongodb />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>MongoDB</PopoverHeader>
                  <PopoverBody>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiHeroku />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Heroku</PopoverHeader>
                  <PopoverBody>Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiRor />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Ruby on Rails</PopoverHeader>
                  <PopoverBody>Ruby on Rails is a server-side web application framework written in Ruby under the MIT License.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
              <Popover>
                <PopoverTrigger>
                  <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<SiNextdotjs />} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight='bold'>Next.js</PopoverHeader>
                  <PopoverBody>Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.</PopoverBody>
                </PopoverContent>
              </Popover>
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
