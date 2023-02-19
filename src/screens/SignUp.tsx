import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {useAppDispatch} from '../store';
import userSlice from '../slices/userSlice';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const [charName, setCharName] = useState('');
  const onSubmit = () => {
    if (charName.trim()) {
      dispatch(userSlice.actions.setCharacter({charName: charName.trim()}));
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={[styles.container, {paddingHorizontal: 20}]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.card}>
          <Text style={styles.text}>캐릭터명을 입력해 주세요</Text>
          <TextInput
            style={styles.input}
            keyboardType={'web-search'}
            placeholder={'Search...'}
            value={charName}
            onChangeText={props => setCharName(props)}
            autoFocus={true}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {flex: 1, backgroundColor: '#3a3a3a'},
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 20,
    padding: 10,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    backgroundColor: '#a8a8a8',
  },
  input: {
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  submitButton: {
    alignSelf: 'center',
  },
});
export default SignUp;
