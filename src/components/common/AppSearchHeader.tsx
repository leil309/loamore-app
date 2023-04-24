import {
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {BlurView} from '@react-native-community/blur';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCallback, useState} from 'react';
import userSlice from '~/slices/userSlice';
import {useUpsertCharacterMutation} from '~/gql/generated/graphql';
import {useAppDispatch} from '~/store';
import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {HomeTabParamList} from '~/navigation/types';
const AppSearchHeader = () => {
  const statusBarHeight =
    Platform.OS === 'ios'
      ? getStatusBarHeight(true)
      : StatusBar?.currentHeight || 0;
  const osHeight = Platform.OS === 'ios' ? 40 : 44;
  const [headerHeight, setHeaderHeight] = useState<number>(osHeight);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [characterName, setCharacterName] = useState('');
  const windowHeight = Dimensions.get('window').height;
  const showModal = () => {
    setShowHeader(true);
    setHeaderHeight(windowHeight);
    setShowFilter(true);
  };
  const hideModal = useCallback(() => {
    setShowFilter(false);
    setTimeout(() => {
      setHeaderHeight(osHeight);
      setShowHeader(false);
    }, 250);
  }, [osHeight]);

  const {mutate} = useUpsertCharacterMutation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<HomeTabParamList>>();

  const onSubmit = () => {
    if (characterName) {
      mutate(
        {
          name: characterName,
        },
        {
          onSuccess: () => {
            dispatch(userSlice.actions.setCharacter({name: characterName}));
            dispatch(
              userSlice.actions.setCharacterInfo({
                name: characterName,
              }),
            );
            navigation.navigate('HomeStack', {
              screen: 'Home',
            });
            hideModal();
          },
          onError: (e: any) => {
            console.log(e);
          },
        },
      );
    }
  };

  const isFocused = useIsFocused();

  return (
    <View
      style={[{height: headerHeight + statusBarHeight}, styles.blurContainer]}>
      <BlurView
        reducedTransparencyFallbackColor={'#FFFFFF'}
        style={styles.blurContainer}
        blurType={'dark'}
        blurAmount={Platform.OS === 'ios' ? 20 : 25}
      />
      {Platform.OS === 'ios' ? (
        <View style={{height: osHeight}} />
      ) : (
        <View
          style={{
            height: headerHeight + (StatusBar?.currentHeight || 0),
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(180,225,255,0.1)',
          }}
        />
      )}
      <View
        style={[styles.wrapper, {marginTop: StatusBar?.currentHeight || 0}]}>
        {!showHeader ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={styles.headerText}>LoaMore</Text>
            <Pressable
              style={{flexDirection: 'row'}}
              onPress={() => showModal()}>
              <MaterialIcons
                name={'search'}
                size={30}
                color={'#8c9093'}
                style={{marginRight: 5}}
              />
            </Pressable>
          </View>
        ) : null}
        <Modal
          animationOut={'fadeOut'}
          animationIn={'fadeIn'}
          animationInTiming={500}
          backdropOpacity={0}
          isVisible={showFilter && isFocused}
          onBackdropPress={() => hideModal()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 50,
              width: '100%',
              height: '100%',
            }}>
            <View style={styles.inputWrapper}>
              <TextInput
                autoFocus={true}
                focusable={showFilter}
                style={styles.input}
                onChangeText={newText => setCharacterName(newText.trim())}
                placeholder={'캐릭터 검색'}
                placeholderTextColor={'#FFFFFF'}
                selectionColor={'#FFFFFF'}
                autoCapitalize={'none'}
                importantForAutofill="yes"
                maxLength={20}
                onSubmitEditing={() => onSubmit()}
              />
              <Pressable
                style={{
                  position: 'absolute',
                  right: 5,
                }}
                onPress={() => onSubmit()}>
                <MaterialIcons name={'search'} size={30} color={'#8c9093'} />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    elevation: 5,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 6,
    elevation: 6,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrapper: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: '#FFFFFF',
  },
  headerText: {
    color: '#707375',
    fontSize: 23,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 40,
    flex: 1,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AppSearchHeader;
