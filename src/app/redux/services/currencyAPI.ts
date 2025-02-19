import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
export type ExchangeRates = {
    base: string;
    date: string;
    //rates: Record<string, number>;
    rates: {
        [key: string]: number;
    };
  }

// Define the API for fetching currency rates
export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.exchangerate-api.com/v4/latest/' }),
  endpoints: (builder) => ({
    getExchangeRates: builder.query<ExchangeRates, string>({
      query: (baseCurrency = 'SEK') => `${baseCurrency}`, // Dynamic query for different base currencies
    }),
  }),
});

export const { useGetExchangeRatesQuery } = currencyApi;

