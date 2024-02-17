// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "@/services/Certificate";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the type of the AppDispatch
export type AppDispatch = typeof store.dispatch;
