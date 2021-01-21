import { Button, useColorMode } from "@chakra-ui/react";
import useTranslation from "hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  const { t, locale } = useTranslation();
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
      <span style={{ position: "absolute", right: 10, top: "50%" }}>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "🌞"}
        </Button>
      </span>
      <span style={{ position: "absolute", right: 10, fontSize: "1.5rem" }}>
        <Link href={pathname} locale={locale === "tr" ? "en" : "tr"}>
          <a>{locale === "tr" ? "en" : "tr"}</a>
          {/* <a>{locale === "tr" ? languageNames["en"] : languageNames["tr"]}</a> */}
        </Link>{" "}
      </span>
    </nav>
  );
};

export default Navbar;
