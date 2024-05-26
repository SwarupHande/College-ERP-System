import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../Utils/baseUrl';
import jwt_decode from 'jwt-decode';

// feereceipt actions
export const saveFeeReceiptToDBAction = createAsyncThunk(
  'feereceipt/save',
  async (feereceipt, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseUrl}/feereceipt/append_database`,
        feereceipt,
        config
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//send invite link action
export const sendInviteLinkAction = createAsyncThunk(
  'users/invite',
  async (inviteData, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //http call
    try {
      const { data } = await axios.post(
        `${baseUrl}/user/invite`,
        inviteData,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Login
export const loginUserAction = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      //make http call
      const { data } = await axios.post(`${baseUrl}/user/auth/login`, userData);
      // console.log('RES', data);
      const details = jwt_decode(data?.token);
      details.token = data?.token;
      // console.log('DETAILS', details);
      localStorage.setItem('userInfo', JSON.stringify(details));

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//register action
export const registerUserAction = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseUrl}/user/auth/register`,
        user,
        config
      );
      const details = jwt_decode(data?.token);
      details.token = data?.token;
      console.log('DETAILS', details);
      localStorage.setItem('userInfo', JSON.stringify(details));
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
//Logout action
export const logoutAction = createAsyncThunk(
  '/logout',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem('userInfo');
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userLoginFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

//slices
const usersSlices = createSlice({
  name: 'users',
  initialState: {
    userAuth: userLoginFromStorage,
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('userInfo');
      state.userAuth = null;
    },
  },
  extraReducers: (builder) => {
    // invite
    builder.addCase(sendInviteLinkAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(sendInviteLinkAction.fulfilled, (state, action) => {
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(sendInviteLinkAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });

    //login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    //logout
    builder.addCase(logoutAction.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.userAuth = undefined;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export const { logout } = usersSlices.actions;
export default usersSlices.reducer;
