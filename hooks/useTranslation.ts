import strings from "../translations/strings";
import { useRouter } from "next/router";

const useTranslation = () => {
  const { locale, defaultLocale } = useRouter();

  const t = (key: string) => {
    if (!strings[locale!][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale!][key] || strings[defaultLocale!][key] || "";
  };

  return {
    t,
    locale,
  };
};

export default useTranslation;
