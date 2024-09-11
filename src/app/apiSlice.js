import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./api";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = "";
    if (token) {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      headers.set("authentication", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const apiSlice = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});