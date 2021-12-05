import { Box } from '@chakra-ui/react';
import Layout from 'components/Layout';
import useLocale from 'hooks/useLocale';

const About = () => {
  const { t } = useLocale();
  return (
    <Layout pageTitle={t('about')}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        <h1>{t('aboutme')}</h1>
      </Box>
    </Layout>
  );
};

export default About;
