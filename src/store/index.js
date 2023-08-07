import { configureStore } from '@reduxjs/toolkit';
import { customerSlice } from './slices/layout';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { MyAccountApi } from './api/myAccount';

const persistConfig = {
  key: 'customer',
  storage,
};
const persistedReducer = persistReducer(persistConfig, customerSlice.reducer);

export const store = configureStore({
  reducer: {
    [MyAccountApi.reducerPath]: MyAccountApi.reducer,
    customer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(MyAccountApi.middleware),
});
export const persistor = persistStore(store);
