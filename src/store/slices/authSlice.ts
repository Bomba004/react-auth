import { TLoading } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  permissions?: string[];
}

interface AuthState {
  loading: TLoading;
  error: null | string;

  user: User | null;
  token: string | null;
}

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// State:
const initialState: AuthState = {
  loading: "idle",
  error: null,

  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    login: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
