import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./slices/layout";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "customer",
  storage,
};
const persistedReducer = persistReducer(persistConfig, customerSlice.reducer);

export const store = configureStore({
  reducer: {
    customer: persistedReducer,
  },
});
export const persistor = persistStore(store);