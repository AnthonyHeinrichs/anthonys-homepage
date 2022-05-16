import { Center, Button, Container, SimpleGrid, Image, Box } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Cv = () => {
  const downloadHandler = () => {
    saveAs(
      '/contents/cv.pdf',
      'Anthony Heinrichs Fullstack CV.pdf'
    )
  }

  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Center>
            <SimpleGrid columns={[1]}>
                <Box boxShadow='dark-lg' p={1} rounded='md' bg='white' mt={16}>
                  <Image borderColor='whiteAlpha.800' borderStyle='solid' maxWidth='300px' src='/images/anthony-heinrichs-cv.png' alt='Profile Pciture' />
                </Box>
                <Center>
                  <Button colorScheme='teal' variant='solid' onClick={downloadHandler} mt={4} width={40}>
                    Download my CV
                  </Button>
                </Center>
            </SimpleGrid>
          </Center>
        </Section>
      </Container>
    </Layout>
  )
}

export default Cv
