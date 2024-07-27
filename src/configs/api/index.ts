import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "./queries";

export const commonApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["inn"],
  endpoints: () => ({}),
});
