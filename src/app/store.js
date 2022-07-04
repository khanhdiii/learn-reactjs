import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/Counter/couterSlice';
import useReducer from '../features/Auth/userSlice';
const rootReducer = {
  counter: counterReducer,
  user: useReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
