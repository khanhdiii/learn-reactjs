import userApi from 'api/userApi';
import { createAsyncThunk } from '../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk';
import { createSlice } from '../../../node_modules/@reduxjs/toolkit/dist/createSlice';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);

  //save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  //return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    loadings: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;

export default reducer;
