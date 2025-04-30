import i18n from '@/i18n/config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: 'en' | 'ar';
}

const initialState: LanguageState = {
  currentLanguage: 'en'
};

// 🧠 دالة مساعدة لتحديث اللغة في DOM و i18n
const applyLanguageSettings = (lang: 'en' | 'ar') => {
  document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  i18n.changeLanguage(lang);
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.currentLanguage = action.payload;
      applyLanguageSettings(action.payload);
    },
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === 'ar' ? 'en' : 'ar';
      applyLanguageSettings(state.currentLanguage);
    },
  }
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
