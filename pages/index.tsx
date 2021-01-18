import React, { useEffect } from "react";
import Layout from "components/Layout";
import useTranslation from "hooks/useTranslation";
import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { Chakra } from "components/ChakraProvider";

export default function Home({ cookies }: any) {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Chakra cookies={cookies}>
      <Layout title="Welcome">
        <h1>{t("hello")}</h1>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "🌞"}
        </Button>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from "components/ChakraProvider";
