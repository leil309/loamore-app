import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '~/slices/userSlice';
import filterSlice from '~/slices/filterSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  filter: filterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
