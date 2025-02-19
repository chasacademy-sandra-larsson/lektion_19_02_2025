import { configureStore } from "@reduxjs/toolkit";
import foodSelectionReducer from './slices/foodSelectionSlice'
import { restaurantApi } from "./services/restaurantsAPI";


export const store = configureStore({
    reducer: {
        foodSelection: foodSelectionReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restaurantApi.middleware),
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch