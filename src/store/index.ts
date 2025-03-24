import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import languageReducer from './slices/languageSlice';
import themeReducer from './slices/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};

const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['currentLanguage'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['isDark'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedLanguageReducer = persistReducer(languagePersistConfig, languageReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    language: persistedLanguageReducer,
    theme: persistedThemeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
