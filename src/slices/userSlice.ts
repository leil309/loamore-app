import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserState {
  id: number;
  character: ICharacter | undefined | null;
}

interface IId {
  id: number;
}

interface ICharacter {
  charName: string;
}

const initialState: IUserState = {
  id: 0,
  character: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IId>) {
      state.id = action.payload.id;
    },
    setCharacter(state, action: PayloadAction<ICharacter>) {
      state.character = action.payload;
      AsyncStorage.setItem('character_name', action.payload.charName);
    },
    reset() {
      return {...initialState};
    },
  },
});

export default userSlice;
