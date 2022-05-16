import Head from 'next/head'
import Navbar from '../navbar.js'
import Footer from '../footer.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router}) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Anthony Heinrichs - Profile</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main