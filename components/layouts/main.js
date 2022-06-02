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
          <title>Anthony Heinrichs - Developer Profile</title>
          <link rel='icon' href='/images/profilelogo.svg' />
          <Image src='/images/developer-site.jpg' alt='Anthony Heinrichs' layout='fill' />
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
