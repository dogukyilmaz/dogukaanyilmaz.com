import { Box } from "@chakra-ui/react";
import Layout from "components/Layout";

interface Props {}

const theming = (props: Props) => {
  return (
    <Layout>
      <Box w={200} h="15vh" bg="yellow.100" boxShadow="md" rounded="lg" />
    </Layout>
  );
};

export default theming;
