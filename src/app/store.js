import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice';

export const store = configureStore({
  reducer: {
    text : textReducer
  },
});
