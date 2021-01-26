import { Button, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useLocale from "hooks/useLocale";

const Navbar = () => {
  const { pathname } = useRouter();
  const { t } = useLocale();
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  return (
    <nav>
      <Link href="/">
        <a style={pathname === "/" ? { color: "white" } : {}}>{t("home")}</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a style={pathname === "/about" ? { color: "white" } : {}}>{t("about")}</a>
      </Link>{" "}
      |{" "}
      <Link href="/theming">
        <a style={pathname === "/theming" ? { color: "white" } : {}}>{t("theming")}</a>
      </Link>
      |{" "}
      <Link href="/contact">
        <a style={pathname === "/contact" ? { color: "white" } : {}}>{t("contact")}</a>
      </Link>
      <span style={{ position: "absolute", right: 10, top: "50%" }}>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "🌞"}
        </Button>
      </span>
    </nav>
  );
};

export default Navbar;
