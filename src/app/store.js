import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { farmApi } from "../api/farmApi";
import signupReducer from "../features/farmSlice";

export const store = configureStore({
  reducer: {
    signupState: signupReducer,
    [farmApi.reducerPath]: farmApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(farmApi.middleware),
});

setupListeners(store.dispatch);
