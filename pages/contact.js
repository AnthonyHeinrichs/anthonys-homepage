import { Container, Box, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Contact = () => {

  return (
    <Container>
      <Box display={{ md: 'flex' }} mt={100}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Contact Me
          </Heading>
        </Box>
      </Box>
    </Container>
  )
}

export default Contact
