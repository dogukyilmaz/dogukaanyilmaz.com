import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import LocaleSelector from "./LocaleSelector";

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle = "Hello, friend." }) => (
  <Container maxW="100%" p={0}>
    <Header title={pageTitle} />
    <Flex flexDirection="column" h="100vh">
      <Box h={35} bg="blue.500">
        <header>
          <Navbar />
          <LocaleSelector />
        </header>
      </Box>
      <Box flex={1} bg="green.500">
        <main>{children}</main>
      </Box>
      <Box h={25} bg="red.500">
        <footer>
          <Footer />
        </footer>
      </Box>
    </Flex>
  </Container>
);

export default Layout;
