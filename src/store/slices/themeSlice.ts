import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  // isDark: boolean;
  // theme: string;
  theme: 'normal' | 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
