import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import { zeroRightClassName } from 'react-remove-scroll-bar';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme} className={zeroRightClassName}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter intial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
