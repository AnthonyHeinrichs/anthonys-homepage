import { Container, Heading, Center } from '@chakra-ui/react'
import LostBear from '../components/bear'

const Custom404 = () => {
 
  return (
    <Container>
      <Center>
        <Heading as='h2' mt={16}>
          404
        </Heading>
      </Center>
      <Center>
        <p>Page not found</p>
      </Center>
      <LostBear />
    </Container>
  )
}

export default Custom404
