import { createSlice } from '@reduxjs/toolkit';
import { isString, TLoading } from '@/types';
import { Register } from './act/actAuth';

// (interface|type) State:
interface IAuthState {
    loading: TLoading;
    error: null | string;
}

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// State:
const initialState: IAuthState ={
    loading: "idle",
    error: null,
}

// Slice:
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {// reducers: Methods|Actions|Functions - المسؤل عن التعامل مع الحالة
        // login: (state, action) => {
        //     state.user = action.payload;
        // },
        // logout: (state) => {
        //     state.user = null;
        // }
    },
    extraReducers: (builder) => {
        // Register
        builder.addCase(Register.pending, (state) => { state.loading = 'pending'; state.error = null; });
        builder.addCase(Register.fulfilled, (state) => { state.loading = 'succeeded'; state.error = null; });
        builder.addCase(Register.rejected, (state, action) => { state.loading = 'failed'; state.error = (isString(action.payload)) ? action.payload : null; });
    }
});

export default authSlice.reducer;
export { Register };
// export const { login, logout } = authSlice.actions;