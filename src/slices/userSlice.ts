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
  server: string;
  guild: string;
  level: string;
  uri: string;
  job: string;
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
      console.log('SET_NAME');
      AsyncStorage.setItem('character_name', action.payload.name);
    },
    setCharacterInfo(state, action: PayloadAction<ICharacter>) {
      state.character = action.payload;
      console.log('SET_INFO');
      AsyncStorage.setItem('character_name', action.payload.name);
      AsyncStorage.setItem('character_server', action.payload.server);
      AsyncStorage.setItem('character_guild', action.payload.guild);
      AsyncStorage.setItem('character_level', action.payload.level);
      AsyncStorage.setItem('character_uri', action.payload.uri);
      AsyncStorage.setItem('character_job', action.payload.job);
    },
    reset() {
      return {...initialState};
    },
  },
});

export default userSlice;
