import strings from "../translations/strings";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

export const languageNames: any = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  ar: "عربى",
};

const useLocale = () => {
  const { locale, defaultLocale, locales, pathname, push } = useRouter();
  const toast = useToast();

  const t = (key: string) => {
    if (!strings[locale!][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale!][key] || strings[defaultLocale!][key] || "";
  };

  const setLocale = (lang: string) => {
    if (locales?.includes(lang)) {
      push(pathname, pathname, { locale: lang });
    } else {
      toast({
        title: `${t("language")}: ${lang.toUpperCase()}`,
        description: `${languageNames[lang]} ${t("langNotFound")}`,
        status: "info",
        position: "top-left",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return {
    t,
    locale,
    setLocale,
  };
};

export default useLocale;
