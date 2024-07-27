import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { MainLayout, StoreProvider, StylesProvider } from "src/configs/providers";
import './style.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
        <StylesProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </StylesProvider>
    </StoreProvider>
  );
}

export default appWithTranslation(MyApp);
