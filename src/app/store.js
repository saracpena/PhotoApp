import { configureStore } from '@reduxjs/toolkit';
// This reducer will handle any user actions like login/logout/delete user etc.
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer, 
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
