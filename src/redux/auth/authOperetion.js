import axios from 'axios';
import { toast } from 'react-toastify';

const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast(`You have already registered`);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast('Error: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const LogOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      clearAuthHeader();
    } catch (error) {
      toast('Error: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return thunkAPI.rejectWithValue();
    else {
      setAuthHeader(persistedToken);

      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        toast('Error: ' + error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
