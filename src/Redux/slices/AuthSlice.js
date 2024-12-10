import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null, 
    loading: false, 
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  },
  reducers: {
    setUserData(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
    setLoading(state, action) {
        state.loading = action.payload;
    },
    setToken(state,action){
      state.token=action.payload;
    }
    
  },
});

export const { setUserData, logout,setLoading,setToken } = authSlice.actions;
export default authSlice.reducer;