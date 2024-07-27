import { Global } from "@emotion/react";

const Media = () => (
  <Global
    styles={`
      @media screen and (max-width: 30em) {
        html, body {
          font-size: 12px;
        }
      }
      .react-datepicker-wrapper {
        width: 100%;
      }
      .react-datepicker__close-icon {
        right: 4px;
      }
    `}
  />
);

export default Media;
