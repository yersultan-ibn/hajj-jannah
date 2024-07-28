import { commonApi } from "src/configs/api";

const api = commonApi.injectEndpoints({
  endpoints: (build) => ({
    partnerFillingData: build.query<void, any>({
      query: (body) => ({
        url: `/gateway/core/skyauto-core-applications-partner-filling-data`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazyPartnerFillingDataQuery,
} = api;
