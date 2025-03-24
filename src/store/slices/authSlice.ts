import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
<<<<<<< HEAD
=======
  permissions?: string[];
>>>>>>> master
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
<<<<<<< HEAD
=======
    register: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
>>>>>>> master
    login: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

<<<<<<< HEAD
export const { login, logout } = authSlice.actions;
=======
export const { login, logout, register } = authSlice.actions;
>>>>>>> master

export default authSlice.reducer;
