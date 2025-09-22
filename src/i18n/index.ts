import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
};


const initI18next = async (lng: string | undefined, ns: string | undefined) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
        ...getOptions(lng, ns),
        resources
    });
  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns?: string | undefined,
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}