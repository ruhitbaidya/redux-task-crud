import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../fetcher/crudOpetaion/apiCreate";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getStoreMiddleware) =>
    getStoreMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
