import { Box } from "@chakra-ui/react";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";

interface Props {}

const theming = (props: Props) => {
  const { t } = useLocale();
  return (
    <Layout pageTitle={t("theming")}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        <Box w={200} h="15vh" bg="teal.500" boxShadow="md" rounded="lg" />
      </Box>
    </Layout>
  );
};

export default theming;
