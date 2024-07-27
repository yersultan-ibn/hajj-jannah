import React, { ReactElement, FC } from "react";
import { Provider } from "react-redux";

import { store } from "src/configs/store";

interface Props {
  children: ReactElement;
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
