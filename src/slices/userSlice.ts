import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserState {
  id: number;
  characterName: ICharacterName | undefined | null;
  character: ICharacter | undefined | null;
}

interface IId {
  id: number;
}

interface ICharacterName {
  name: string;
}
interface ICharacter {
  name: string;
}

const initialState: IUserState = {
  id: 0,
  character: null,
  characterName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IId>) {
      state.id = action.payload.id;
    },
    setCharacter(state, action: PayloadAction<ICharacterName>) {
      state.characterName = action.payload;
      AsyncStorage.setItem('character_name', action.payload.name);
    },
    setCharacterInfo(state, action: PayloadAction<ICharacter>) {
      state.character = action.payload;
      AsyncStorage.setItem('character_name', action.payload.name);
    },
    reset() {
      return {...initialState};
    },
  },
});

export default userSlice;
