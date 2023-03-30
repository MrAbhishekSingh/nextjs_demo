import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import customApi from '../../Api/customApi'

export const registerCustom = createAsyncThunk('register', async (data) => {
  try {
    const res = await axios(customApi.register, {
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  }
  catch (error) {
    if (error.response) {
      return error.response.data
    }
  }

})
export const loginCustom = createAsyncThunk('login', async (data) => {
  try {
    const res = await axios(customApi.login, {
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  }
  catch (error) {
    if (error.response) {
      return error.response.data
    }
  }

})

const apiCallMethod = createSlice({
  name: "userData",
  initialState: {
    loading: true,
    user: {},
  },
  reducers: {
    ApiCallData(state, action) {
      state = action.payload;
    }
  },
  extraReducers: {
    [registerCustom.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    [registerCustom.pending]: (state, action) => {
      state.loading = true;
    },
    [registerCustom.rejected]: (state, action) => {
      state.loading = false;
    }
  },
  extraReducers: {
    [loginCustom.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [loginCustom.pending]: (state, action) => {
      state.loading = true;
    },
    [loginCustom.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export const { ApiCallData } = apiCallMethod.actions;
export default apiCallMethod.reducer;
