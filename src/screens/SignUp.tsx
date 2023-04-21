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
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {useUpsertCharacterMutation} from '~/gql/generated/graphql';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const [charName, setCharName] = useState('');
  const {mutate} = useUpsertCharacterMutation();
  const onSubmit = () => {
    if (charName.trim()) {
      mutate(
        {
          name: charName,
        },
        {
          onSuccess: () => {
            dispatch(userSlice.actions.setCharacter({name: charName.trim()}));
            dispatch(
              userSlice.actions.setCharacterInfo({
                name: charName.trim(),
              }),
            );
          },
          onError: (e: any) => {
            console.log(e);
          },
        },
      );
    }
  };

  return (
    <SafeAreaView style={mainContainer}>
      <KeyboardAvoidingView
        style={[styles.container, {paddingHorizontal: 20}]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={baseCard}>
          <Text style={baseText}>캐릭터명을 입력해 주세요</Text>
          <TextInput
            style={styles.input}
            keyboardType={'web-search'}
            placeholder={''}
            placeholderTextColor={'#939393'}
            value={charName}
            onChangeText={props => setCharName(props)}
            autoFocus={true}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text style={baseText}>입력</Text>
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
  input: {
    color: '#e1e1e1',
    marginVertical: 20,
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
