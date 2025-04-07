import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';

// import authReducer from './slices/authSlice';
import auth from './slices/authSlice';



const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['isDark'],
};

const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['currentLanguage'],
};


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};


const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedLanguageReducer = persistReducer(languagePersistConfig, languageReducer);
// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, auth);

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
