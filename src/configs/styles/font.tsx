import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Roboto Black';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Black.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Bold.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Light.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Medium.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Regular';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Regular.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Thin';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('~/lib/assets/fonts/Roboto-Thin.ttf') format('truetype-variations');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
);

export default Fonts;
