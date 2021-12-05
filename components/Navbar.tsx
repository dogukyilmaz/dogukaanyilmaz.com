import { Box, Button, HStack, Tag, TagLabel, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useLocale from 'hooks/useLocale';
import { EmailIcon, LinkIcon, SpinnerIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

const IconEnum = {
  home: EmailIcon,
  about: SpinnerIcon,
  theming: StarIcon,
  contact: LinkIcon,
  apps: SettingsIcon,
  blog: EmailIcon,
} as const;

const Navbar = () => {
  const { pathname } = useRouter();
  const { t } = useLocale();
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  useEffect(() => {}, []);

  return (
    <nav>
      <Box d="flex" justifyContent="center">
        <HStack spacing={4}>
          {Object.entries(IconEnum).map(([route, Icon]) => {
            return (
              <Link href={`/${route === 'home' ? '' : route}`} key={route}>
                <a>
                  <Tag
                    mt={1}
                    size="md"
                    variant="outline"
                    colorScheme="teal"
                    color={pathname === `/${route === 'home' ? '' : route}` ? 'gray.200' : 'inherit'}
                    bgColor={pathname === `/${route === 'home' ? '' : route}` ? 'teal.500' : 'inherit'}
                    _hover={{ cursor: 'pointer', background: 'teal.800', color: 'white' }}
                  >
                    <Icon mr={2} />
                    <TagLabel>{t(`${route}`)}</TagLabel>
                  </Tag>
                </a>
              </Link>
            );
          })}
        </HStack>
      </Box>
      <span style={{ position: 'absolute', right: 10, top: '50%' }}>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          {colorMode === 'light' ? '🌙' : '🌞'}
        </Button>
      </span>
    </nav>
  );
};

export default Navbar;
