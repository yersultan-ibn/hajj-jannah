import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { LocalizationProvider, MainLayout, StoreProvider, StylesProvider } from "src/configs/providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <LocalizationProvider>
        <StylesProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </StylesProvider>
      </LocalizationProvider>
    </StoreProvider>
  );
}

export default appWithTranslation(MyApp);
