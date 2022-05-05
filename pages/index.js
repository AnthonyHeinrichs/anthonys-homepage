import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='gray' p={3} mb={6} align='center'>
        Hi, I am anthony.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Anthony Heinrichs
          </Heading>
          <p>Developer from Canada, living in Berlin</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page;
