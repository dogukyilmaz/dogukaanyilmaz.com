import { Box } from "@chakra-ui/react";
import Layout from "components/Layout";

interface Props {}

const theming = (props: Props) => {
  return (
    <Layout>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        <Box w={200} h="15vh" bg="teal.500" boxShadow="md" rounded="lg" />
      </Box>
    </Layout>
  );
};

export default theming;
