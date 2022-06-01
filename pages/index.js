import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid, UnorderedList, ListItem, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Skill from '../components/skill'
import Layout from '../components/layouts/article'
import skillDataBack from '../lib/skillDataBack'
import skillDataFront from '../lib/skillDataFront'
import skillDataFrame from '../lib/skillDataFrame'
import skillDataOps from '../lib/skillDataOps'

const Page = () => {
  const backSkills = skillDataBack.map(skill => {
    return (
      <Box height='60px' key={skill.id}>
        <Skill
          logo={skill.logo}
          language={skill.language}
          body={skill.body} />
      </Box>
    )
  })

  const frontSkills = skillDataFront.map(skill => {
    return(
      <Box height='60px' key={skill.id}>
        <Skill
          logo={skill.logo}
          language={skill.language}
          body={skill.body} />
      </Box>
    )
  })

  const frameSkills = skillDataFrame.map(skill => {
    return(
      <Box height='60px' key={skill.id}>
        <Skill
          logo={skill.logo}
          language={skill.language}
          body={skill.body} />
      </Box>
    )
  })

  const opsSkills = skillDataOps.map(skill => {
    return(
      <Box height='60px' key={skill.id}>
        <Skill
          logo={skill.logo}
          language={skill.language}
          body={skill.body} />
      </Box>
    )
  })

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={16}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Anthony Heinrichs
            </Heading>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align='center'>
              Fullstack developer based in Berlin.
            </Box>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center' >
            <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/headshot.jpg' alt='Profile Pciture' />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            About me
          </Heading>
          <Paragraph>
            Originally from a small remote fishing town in the north of Vancouver Island
            where the Island&#39;s black bear population is twice that of the population of the town.
            I got my bachelors degree in Business Administration and worked a few years in logistics
            and fulfillment before stepping into a technology focused role. I have always been
            interested in technology, but it was only after working with teams of developers that
            I soon realized I wanted to study to become one myself. After recently finishing the
            Le Wagon Web Development bootcamp, I have been studying full time in hopes to work as a full-time developer.
          </Paragraph>
          <Heading as='h3' variant='section-title' mt={6}>
            Interests
          </Heading>
          <UnorderedList>
            <ListItem>Traveling and learning about new cultures and foods</ListItem>
            <ListItem>Cooking the new foods I have learned about</ListItem>
            <ListItem>Any sports involving teams, bikes, or boards (surf, skate, snow)</ListItem>
            <ListItem>All different types of music</ListItem>
            <ListItem>Mindfulness</ListItem>
          </UnorderedList>
          <Heading as='h3' variant='section-title' mt={8} mb={8}>
            Skills
          </Heading>
          <SimpleGrid columns={[2]} spacing='16px'>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} align='center'>
              <Text mb={4}>
                Backend
              </Text>
              <SimpleGrid columns={[2, null, 4]} spacing='8px'>
                {backSkills}
              </SimpleGrid>
            </Box>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} align='center'>
              <Text mb={4}>
                Frontend
              </Text>
              <SimpleGrid columns={[2, null, 4]} spacing='8px'>
                {frontSkills}
              </SimpleGrid>
            </Box>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} align='center'>
              <Text mb={4}>
                Frameworks
              </Text>
              <SimpleGrid columns={[2, null, 4]} spacing='8px'>
                {frameSkills}
              </SimpleGrid>
            </Box>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} align='center'>
              <Text mb={4}>
                Devops
              </Text>
              <SimpleGrid columns={[2, null, 4]} spacing='8px'>
                {opsSkills}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
