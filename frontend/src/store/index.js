import { configureStore } from "@reduxjs/toolkit";

import { messageApi } from "./services/message";

export const store = configureStore({
  reducer: {
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messageApi.middleware),
});
