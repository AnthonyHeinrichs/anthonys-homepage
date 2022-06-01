import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Anthony Heinrichs - Developer Profile</title>
        <link rel='icon' href='/images/profilelogo.svg' />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter intial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default Website
