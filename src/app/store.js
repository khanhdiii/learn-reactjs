import counterReducer from '../features/Counter/couterSlice';
import useReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = {
  counter: counterReducer,
  user: useReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
