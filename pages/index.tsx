import React, { useEffect, useLayoutEffect } from "react";
import Layout from "components/Layout";
import useTranslation from "hooks/useTranslation";
import { Button, ButtonGroup, ChakraProvider, Heading, useColorMode } from "@chakra-ui/react";

export default function Home({ cookies }: any) {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="Welcome">
      <Heading as="h3" size="lg">
        (lg) In love with React & Next
      </Heading>
      <h1>{t("hello")}</h1>
    </Layout>
  );
}
