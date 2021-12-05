import { Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Footer = () => {
  const { locale } = useRouter();

  return (
    <Center>
      <Text ml={2}>{new Date().toLocaleString(locale)}</Text>
      <Text marginLeft="auto" mr={2}>
        {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
        douscriptist &copy;
        {/* </a> */}
      </Text>
    </Center>
  );
};

export default Footer;
