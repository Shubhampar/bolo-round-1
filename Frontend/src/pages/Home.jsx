import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Container,
} from '@chakra-ui/react';
import ShowForm from '../components/ShowForm';

function Home() {
  return (
    <Box>
      <Box
        as="nav"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        py={{ base: 2, md: 4 }}
        px={{ base: 3, md: 6 }}
        bg="white"
        borderBottom="2px solid #2b22ce"
      >
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color="#2b22ce"
            letterSpacing="tight"
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            mb={{ base: 2, md: 0 }}
          >
            BoLo Dynamic Form
          </Heading>
          
        </Flex>
      </Box>
      <Container
        maxW="100%"
        mt={{ base: 4, md: 8 }}
        px={{ base: 3, md: 6, lg: 8 }}
        py={{ base: 4, md: 6 }}
        bg="gray.100"
        borderRadius="lg"
      >
        <ShowForm />
      </Container>
    </Box>
  );
}

export default Home;

