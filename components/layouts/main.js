import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../navbar.js'
import Footer from '../footer.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router}) => {
  return (
    <>
      <Box as='main' pb={6} minH='95vh'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="title" property="og:title" content="Anthony Heinrichs - Developer Profile" />
          <meta property="og:type" content="Developer Profile" />
          <meta name="description" property="og:description" content="Developer website for Anthony Heinrichs" />
          <link rel='icon' href='/images/profilelogo.svg' />
          <meta name="author" content="Anthony Heinrichs" />
          <meta name="image" property="og:image" content="/images/developer-site.jpg" />
        </Head>
        <Navbar path={router.asPath} />
        <Container maxW='container.md' pt={14}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Main
