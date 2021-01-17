import { useLocaleContext } from "context/LocaleContext";
import useTranslation from "hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { languageNames } from "translations/config";

const Navbar = () => {
  const { pathname } = useRouter();
  const { t, locale } = useTranslation();

  return (
    <nav>
      <Link href="/">
        <a style={pathname === "/" ? { color: "white" } : {}}>{t("home")}</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a style={pathname === "/about" ? { color: "white" } : {}}>{t("about")}</a>
      </Link>
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
