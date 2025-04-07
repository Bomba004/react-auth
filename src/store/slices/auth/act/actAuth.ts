// act --> action ☺
// src/store/slices/auth/act/actAuthLogin.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@/utils/axiosErrorHandler";

type TFormData = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

export const Register = createAsyncThunk(
  "auth/Register",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;
    try {
    //   const res = await axios.post(`/api/auth/register`, formData);
      const res = await axios.post(`/register`, formData);
      return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    //   throw new Error(axiosErrorHandler(error));
    }
  }
);
