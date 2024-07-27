import { Global } from "@emotion/react";

const Fonts = () => (
  <Global

    styles={`
      @font-face {
        font-family: 'Gotham-Book';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('fonts/Gotham-Book.ttf') format('truetype');
      }
      // @font-face {
      //   font-family: 'Gotham-Medium';
      //   font-style: normal;
      //   font-weight: 500;
      //   font-display: swap;
      //   src: url('fonts/Gotham-Medium.ttf') format('truetype');
      // }
      // @font-face {
      //   font-family: 'Gotham-Bold';
      //   font-style: normal;
      //   font-weight: 700;
      //   font-display: swap;
      //   src: url('fonts/Gotham-Bold.ttf') format('truetype');
      // }
      // @font-face {
      //   font-family: 'GretaArabic-Light';
      //   font-style: normal;
      //   font-weight: 300;
      //   font-display: swap;
      //   src: url('fonts/GretaArabic-Light.ttf') format('truetype');
      // }
      body {
        font-family: "Gotham-Book", "GretaArabic-Light", "OpenSans-Regular", system-ui, Arial, Helvetica, sans-serif !important;
        color: #23282d !important;
      }
    `}
  />
);

export default Fonts;
