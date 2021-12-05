import { Box, Center } from '@chakra-ui/react';
import LocaleButton from './LocaleButton';
import useLocale from 'hooks/useLocale';

const LocaleSelector = () => {
  const { t, locale } = useLocale();
  return (
    <Box d="flex" flexDir="column" position="absolute" right={1} top={10}>
      <Center flexDir="column">
        {locale !== 'en' && <LocaleButton lang="EN" colorScheme="green" />}
        {locale !== 'tr' && <LocaleButton lang="TR" colorScheme="red" />}
        {locale !== 'de' && <LocaleButton lang="DE" colorScheme="purple" />}
        {locale !== 'fr' && <LocaleButton lang="FR" colorScheme="yellow" />}
        {locale !== 'ar' && <LocaleButton lang="AR" colorScheme="blue" />}
      </Center>
    </Box>
  );
};

export default LocaleSelector;
