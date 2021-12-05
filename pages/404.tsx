import { Box, Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';
import useLocale from 'hooks/useLocale';
import React from 'react';

interface Props {}

const NotFound = (props: Props) => {
  const { t } = useLocale();
  return (
    <Layout pageTitle={t('404')}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        404
      </Box>
    </Layout>
  );
};

export default NotFound;
