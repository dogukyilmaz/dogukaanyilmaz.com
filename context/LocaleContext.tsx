import React, { createContext, useEffect, useState, FC, useContext } from "react";
import { useRouter } from "next/router";

interface ContextProps {
  locale: any;
  setLocale: (locale: string) => void;
}

interface ProviderProps {
  readonly lang: string;
}

export const LocaleContext = createContext<ContextProps>({
  locale: "en",
  setLocale: () => null,
});

export const LocaleProvider: FC<{ lang: any }> = ({ lang, children }) => {
  const [locale, setLocale] = useState("en");

  const router = useRouter();
  const { locale: l, locales, defaultLocale } = router;

  useEffect(() => {
    setLocale(l || "en");
  }, [locale]);
  // const { query } = useRouter();

  // useEffect(() => {
  //   if (locale !== localStorage.getItem("locale")) {
  //     localStorage.setItem("locale", locale);
  //   }
  // }, [locale]);

  // useEffect(() => {
  //   if (typeof query.lang === "string" && isLocale(query.lang) && locale !== query.lang) {
  //     setLocale(query.lang);
  //   }
  // }, [query.lang, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => useContext(LocaleContext);
