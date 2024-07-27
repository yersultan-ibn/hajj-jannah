import { commonApi } from "src/configs/api";

const api = commonApi.injectEndpoints({
  endpoints: (build) => ({
    applicationRetrieve: build.query<any, any>({
      query: (body) => ({
        url: `/gateway/core/skyauto-core-applications-retrieve`,
        method: 'POST',
        body
      })
    }),
  }),
});

export const {
  useApplicationRetrieveQuery,
} = api;
