import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Article Headline
        </Heading>
        <Text fontSize="lg">
          This is a brief description of the featured article. It provides a summary of the main points and entices the reader to click through to read more.
        </Text>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={4}>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 1</Heading>
          <Text>This is a brief summary of the first article.</Text>
        </Box>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 2</Heading>
          <Text>This is a brief summary of the second article.</Text>
        </Box>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 3</Heading>
          <Text>This is a brief summary of the third article.</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <Flex gap={4}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>About Us</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;