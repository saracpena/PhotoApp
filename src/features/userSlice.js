// 
import { createSlice } from '@reduxjs/toolkit';

//! userSlice, like an onion with multiple layers, contains all user info
//? I can have different slices that serve unique functionality/purpose
//? thus allowing store easier to maintain
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    like:''
  },
  // there are my actions(state, action)
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    deleteUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, deleteUser} = userSlice.actions;

//! Selectors
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

//! Redux:
// REWATCH 2:30 REDUX BROKEN DOWN! Take notes and articulate this! i.e.SLICE
