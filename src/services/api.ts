import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type WantedPerson = any;

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.fbi.gov/" }),
  endpoints: (builder) => ({
    getListOfWantedPeopleByFilters: builder.query<WantedPerson, string>({
      query: (filters) => `@wanted?${new URLSearchParams(filters).toString()}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListOfWantedPeopleByFiltersQuery } = api;
