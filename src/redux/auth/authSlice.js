import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, LogOut, fetchCurrentUser } from './authOperetion';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(LogIn.pending, state => {
        state.loading = true;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(LogOut.pending, state => {
        state.loading = true;
      })
      .addCase(LogOut.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
      });
  },
});

export default authSlice;
