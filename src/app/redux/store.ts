import { configureStore } from "@reduxjs/toolkit";
import foodSelectionReducer from './slices/foodSelectionSlice'
import  currencyConverterReducer from "./slices/currencyConverterSlice";
import { restaurantApi } from "./services/restaurantsAPI";
import { currencyApi } from "./services/currencyAPI";


export const store = configureStore({
    reducer: {
        foodSelection: foodSelectionReducer,
        currencyConverter: currencyConverterReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
        [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restaurantApi.middleware, currencyApi.middleware),
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch