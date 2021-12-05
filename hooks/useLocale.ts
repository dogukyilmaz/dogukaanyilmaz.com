import strings from '../translations/strings';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

export const languageNames: any = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'عربى',
};

export const languageKeys: any = {
  en: 'english',
  tr: 'turkish',
  de: 'german',
  fr: 'french',
  ar: 'arabic',
};

const capitalize = (s: String) => {
  return s
    .split(' ')
    .map(([first, ...rest]: String) => `${first.toUpperCase()}${rest.join('')}`)
    .join(' ');
};

const useLocale = () => {
  const { locale, defaultLocale, locales, pathname, push } = useRouter();
  const toast = useToast();

  const t = (key: string) => {
    let tempKey = '';
    if (!strings[locale!][key]) {
      // console.warn(`Translation '${key}' for locale '${locale}' not found.`);
      tempKey = capitalize(key);
    }
    return strings[locale!][key] || strings[defaultLocale!][key] || tempKey || '';
  };

  const setLocale = (lang: string) => {
    if (locales?.includes(lang)) {
      push(pathname, pathname, { locale: lang });
    } else {
      toast({
        title: `${t('language')}: ${languageNames[lang]}`,
        description: `${t(languageKeys[lang])} ${t('langNotFound')}`,
        status: 'info',
        position: 'top-left',
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
