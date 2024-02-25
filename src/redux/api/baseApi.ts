import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.server_url}/api`,
  }),
  tagTypes: ["all-quiz", "all-module"],

  endpoints: () => ({}),
});
