import { Center, Button, useColorModeValue, Container, SimpleGrid } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import CustomModal from '../components/modal'
import Section from '../components/section'

const Cv = () => {
  const clickHandler = () => {
    saveAs(
      '/contents/cv.pdf',
      'Anthony Heinrichs Fullstack CV.pdf'
    )
  }

  return (
    <Container>
      <Section delay={0.1}>
        <Center>
          <SimpleGrid columns={[1]}>
            <Center mt={8}>
              <Button colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' onClick={clickHandler}>
                Download my Resume
              </Button>
            </Center>
            <Center mt={8}>
              <CustomModal />
            </Center>
          </SimpleGrid>
        </Center>
      </Section>
    </Container>
  )
}

export default Cv
