import React, { useEffect, useLayoutEffect } from 'react';
import Layout from 'components/Layout';
import useLocale from 'hooks/useLocale';
import { Box, Button, ButtonGroup, ChakraProvider, Heading, useColorMode } from '@chakra-ui/react';

export default function Home({ cookies }: any) {
  const { t } = useLocale();

  return (
    <Layout pageTitle={t('welcome')}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        {/* <Heading as="h3" size="lg">
        (lg) In love with React & Next
      </Heading> */}
        <h1>{t('hello')}</h1>
      </Box>
    </Layout>
  );
}
