import React, { FC, ReactElement } from "react";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { calculation as calculationUa } from "src/configs/translate/ua/calculation";
import { calculation as calculationRu } from "src/configs/translate/ru/calculation";
import { calculation as calculationEn } from "src/configs/translate/en/calculation";
import { common as commonUa } from "src/configs/translate/ua/common";
import { common as commonRu } from "src/configs/translate/ru/common";
import { common as commonEn } from "src/configs/translate/en/common";

import { footerBtn as footerBtnUa } from "src/configs/translate/ua/footer-btn";
import { footerBtn as footerBtnRu } from "src/configs/translate/ru/footer-btn";
import { footerBtn as footerBtnEn } from "src/configs/translate/en/footer-btn";

import { checkout as checkoutUa } from "src/configs/translate/ua/checkout";
import { checkout as checkoutRu } from "src/configs/translate/ru/checkout";
import { checkout as checkoutEn } from "src/configs/translate/en/checkout";


import { partner as partnerUa } from "src/configs/translate/ua/partner";
import { partner as partnerRu } from "src/configs/translate/ru/partner";
import { partner as partnerEn } from "src/configs/translate/en/partner";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: {
        common: commonUa,
        calculation: calculationUa,
        footerBtn: footerBtnUa,
        checkout: checkoutUa,
        partner: partnerUa,
      },
      ru: {
        common: commonRu,
        calculation: calculationRu,
        footerBtn: footerBtnRu,
        checkout: checkoutRu,
        partner: partnerRu,
      },
      en: {
        common: commonEn,
        calculation: calculationEn,
        footerBtn: footerBtnEn,
        checkout: checkoutEn,
        partner: partnerEn,
      },
    },
    backend: {
      backendOptions: [{ expirationTIme: 0 }],
    },
    lng: 'ru',
    fallbackLng: 'ru',
    supportedLngs: ["ru", "ua", "en"],
    debug: true, // process.env.NEXT_ENV
    returnObjects: true,
    returnEmptyString: false,
  });

interface Props {
  children: ReactElement;
}

export const LocalizationProvider: FC<Props> = ({children}) => {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};
