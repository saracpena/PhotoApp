import { configureStore } from '@reduxjs/toolkit';
// This reducer will handle any user actions like login/logout/delete user etc.
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
