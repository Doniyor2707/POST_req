import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
import { baseUrl } from "./api";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
