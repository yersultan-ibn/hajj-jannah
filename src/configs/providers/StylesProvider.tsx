import React, { FC, ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "src/configs/styles/theme";
import Fonts from "src/configs/styles/font";
import Media from "src/configs/styles/media";

interface Props {
  children: ReactElement;
}

export const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'top-right', isClosable: true } }}>
      <Fonts />
      <Media />
      {children}
    </ChakraProvider>
  );
};
