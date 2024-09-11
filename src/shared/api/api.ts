import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "http://localhost:3000/api";

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("_auth");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
