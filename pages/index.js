import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from  '../components/paragraph'
import { DiCss3Full, DiReact } from 'react-icons/di'

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
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>CSS</PopoverHeader>
                  <PopoverBody>Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</PopoverBody>
                </PopoverContent>
              </Popover>
              </Box>
              <Box height='60px' mt={6}>
                <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
              </Box>
              <Box height='60px' mt={6}>
                <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
              </Box>
              <Box height='60px' mt={6}>
                <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
              </Box>
              <Box height='60px' mt={6}>
                <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
              </Box>
              <Box height='60px' mt={6}>
                <IconButton colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' size='lg' fontSize='40px' icon={<DiReact />} />
              </Box>
            </SimpleGrid>
          </Box>
          <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
              Backend
          </Box>
          <Box>

          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  )
}

export default Page;
