import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: 'en' | 'ar';
}

const initialState: LanguageState = {
  currentLanguage: 'en'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.currentLanguage = action.payload;
      document.dir = action.payload === 'ar' ? 'rtl' : 'ltr';
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
