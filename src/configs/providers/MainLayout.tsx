import React, { FC, Fragment, ReactElement } from "react";
import { Box, Center } from "@chakra-ui/react";
import { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';

// @ts-ignore
registerLocale('ru', ru);

interface Props {
  children: ReactElement;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Box>
        <Center
          backgroundColor="#F5F6F7"
          minH="100vh"
          alignItems="flex-start"
        >
          {children}
        </Center>
      </Box>
    </Fragment>
  );
};
