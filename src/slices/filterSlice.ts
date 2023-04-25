import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFindClassQuery} from '~/gql/generated/graphql';

const initialState: IFindClassQuery = {
  findClass: [],
};

const filterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFindClassQuery>) {
      state.findClass = action.payload.findClass;
      console.log('SET_FILTER');
    },
    reset() {
      return {...initialState};
    },
  },
});

export default filterSlice;
