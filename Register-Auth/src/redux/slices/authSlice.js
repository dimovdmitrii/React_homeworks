import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/api/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const tokenFromLocalStorage = localStorage.getItem("token");
const userFromLocalStorage = tokenFromLocalStorage
  ? jwtDecode(tokenFromLocalStorage)
  : null;

const initialState = {
  user: userFromLocalStorage,
  token: tokenFromLocalStorage,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "successeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successeded";
        state.token = action.payload.token;
        state.user = jwtDecode(action.payload.token);
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
