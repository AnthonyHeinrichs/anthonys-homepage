import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './layouts/light-dark-toggle-button'
import {
  Container,
  Text,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#ff63c3' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box position='fixed' as='nav' w='100%' bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}>
      <Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' justify='space-between'>
        <Flex align='center' mr={5}>
          <Heading as='h2' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}>
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Open Sans'
            fontWeight='normal'
            ml={3}
            >
            <LinkItem href='/projects' path={path}>Projects</LinkItem>
            <LinkItem href='/cv' path={path}>CV</LinkItem>
            <LinkItem href='/contact' path={path}>Contact</LinkItem>
          </Text>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='options' />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/projects' passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href='/cv' passHref>
                  <MenuItem as={Link}>CV</MenuItem>
                </NextLink>
                <NextLink href='/contact' passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}


export default Navbar
