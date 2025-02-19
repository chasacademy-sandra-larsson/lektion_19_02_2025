import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // json filer är i public folder
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => 'restaurants.json' // sökväg till json filen
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantApi;

