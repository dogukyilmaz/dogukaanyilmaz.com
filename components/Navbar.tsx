import { Box, Button, HStack, Tag, TagLabel, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useLocale from "hooks/useLocale";
import { EmailIcon, LinkIcon, SpinnerIcon, StarIcon } from "@chakra-ui/icons";

const RouteIcon = (route: string) => {
  let Icon;
  if (route === "home") {
    Icon = EmailIcon;
  } else if (route === "about") {
    Icon = SpinnerIcon;
  } else if (route === "theming") {
    Icon = StarIcon;
  } else if (route === "contact") {
    Icon = EmailIcon;
  } else {
    Icon = LinkIcon;
  }
  return <Icon mr={2} />;
};

const Navbar = () => {
  const { pathname } = useRouter();
  const { t } = useLocale();
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  return (
    <nav>
      <Box d="flex" justifyContent="center">
        <HStack spacing={4}>
          {["home", "about", "theming", "contact"].map((route, i) => (
            <Link href={`/${route === "home" ? "" : route}`} key={i}>
              <a>
                <Tag
                  mt={1}
                  size="md"
                  variant="outline"
                  colorScheme="teal"
                  color={pathname === `/${route === "home" ? "" : route}` ? "gray.200" : "inherit"}
                  bgColor={pathname === `/${route === "home" ? "" : route}` ? "teal.500" : "inherit"}
                  _hover={{ cursor: "pointer", background: "teal.800", color: "white" }}
                >
                  {RouteIcon(route)}
                  <TagLabel>{t(`${route}`)}</TagLabel>
                </Tag>
              </a>
            </Link>
          ))}
        </HStack>
      </Box>
      <span style={{ position: "absolute", right: 10, top: "50%" }}>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "🌞"}
        </Button>
      </span>
    </nav>
  );
};

export default Navbar;
