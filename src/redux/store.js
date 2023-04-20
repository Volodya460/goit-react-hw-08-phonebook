import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import authSlice from './auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistStoreAuth = persistReducer(authPersistConfig, authSlice.reducer);
export const store = configureStore({
  reducer: {
    user: contactSlice.reducer,
    auth: persistStoreAuth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
