import { configureStore } from "@reduxjs/toolkit";

import { commonApi } from "src/configs/api";

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([commonApi.middleware]),
  // devTools: process.env.NEXT_ENV
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
