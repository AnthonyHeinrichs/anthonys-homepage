import { Container, Box, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import Section from '../components/section'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bdo7xz2', 'template_80ivt87', form.current, 'kwKSPUi0QO0oI8i6K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<Container>
  <Box display={{ md: 'flex' }} mt={100}>
    <Box flexGrow={1}>
      <Heading as='h2' variant='page-title'>
        Send me a message
      </Heading>
    </Box>
  </Box>
  <Section delay={0.1}>
    <form ref={form} onSubmit={sendEmail}>
      <FormControl>
        <FormLabel mt={8}>Name</FormLabel>
        <Input name='user_name' type='text'/>
        <FormLabel mt={4}>Email address</FormLabel>
        <Input name='user_email' type='email' />
        <FormHelperText>I will never share your email with anyone else.</FormHelperText>
        <FormLabel mt={4} size='lg'>Message</FormLabel>
        <Input name='message' type='message' />
        <Button onClick={sendEmail} colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} variant='outline' mt={4} type='sumbit'>Submit</Button>
      </FormControl>
    </form>
  </Section>
</Container>
  )
};

export default Contact
