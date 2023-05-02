import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
import {baseText} from '~/components/styles';
import {useSelector} from 'react-redux';
import {RootState} from '~/store/reducder';
import * as _ from 'lodash';

interface IAppSearchHeader {
  rankingFilter?: boolean;
  setSelectedClass?: Function;
}

interface IEngravingFilter {
  image_uri: string;
  name: string;
}
const AppSearchHeader = ({
  rankingFilter = false,
  setSelectedClass,
}: IAppSearchHeader) => {
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
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );
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
  const findClass = useSelector((state: RootState) => state.filter.findClass);
  const [classFilter, setClassFilter] = useState(
    Object.entries(
      _.groupBy(
        findClass.map(x => {
          return {
            ...x,
            selected: false,
          };
        }),
        'type',
      ),
    ),
  );

  const [engravingFilter, setEngravingFilter] = useState<
    Array<IEngravingFilter>
  >([]);

  const onSubmit = () => {
    if (characterName.trim()) {
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

  const onPressClass = (classData: any) => {
    const selected: Array<string> = [];
    const engravingFt: Array<IEngravingFilter> = [];
    setClassFilter(
      classFilter.map(x => {
        x[1] = x[1].map(y => {
          if (y.name && y.name.trim() === classData.name.trim()) {
            y.selected = !y.selected;
          }
          if (y.selected) {
            selected.push(y.name);
            y.engraving?.map(eng => {
              engravingFt.push({name: eng.name, image_uri: eng.image_uri});
            });
          }
          return y;
        });
        return x;
      }),
    );
    if (setSelectedClass) {
      setSelectedClass(selected);
    }
    setEngravingFilter(engravingFt);
  };

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
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
          animationOut={'fadeOut'}
          animationIn={'fadeIn'}
          animationInTiming={500}
          backdropOpacity={0}
          isVisible={showFilter && isFocused}
          onBackdropPress={() => hideModal()}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 50,
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
            {showFilter && rankingFilter && !!classFilter
              ? classFilter.map((cf, index: number) => {
                  return (
                    <View key={index}>
                      <View style={styles.filterRowWrapper}>
                        <Text style={[baseText, {fontSize: 13}]}>{cf[0]}</Text>
                      </View>
                      <View
                        style={[styles.filterRowWrapper, {flexWrap: 'wrap'}]}>
                        {
                          // @ts-ignore
                          cf[1].map(classData => (
                            <TouchableOpacity
                              key={classData.name}
                              onPress={() => onPressClass(classData)}
                              style={{
                                borderWidth: 0.5,
                                borderColor: '#FFFFFF',
                                borderRadius: 10,
                                backgroundColor: classData.selected
                                  ? '#e8e8e8'
                                  : 'rgba(0,0,0,0.0)',
                                padding: 3,
                                margin: 2.5,
                              }}>
                              <Text
                                style={[
                                  baseText,
                                  {
                                    fontSize: 12,
                                    color: classData.selected
                                      ? '#232323'
                                      : '#e8e8e8',
                                  },
                                ]}>
                                {classData.name}
                              </Text>
                            </TouchableOpacity>
                          ))
                        }
                      </View>
                    </View>
                  );
                })
              : null}
            {showFilter && rankingFilter && engravingFilter.length > 0 ? (
              <View>
                <View>
                  <Text style={[baseText]}>직업각인</Text>
                </View>
                <View style={[styles.filterRowWrapper, {flexWrap: 'wrap'}]}>
                  {engravingFilter.map((ef, index: number) => {
                    return (
                      <View key={index}>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            marginRight: 10,
                            alignItems: 'center',
                          }}>
                          <Image
                            defaultSource={defaultImg}
                            source={{
                              uri: ef.image_uri
                                ? `https://cdn-lostark.game.onstove.com/${ef.image_uri}`
                                : defaultImg.uri,
                            }}
                            style={{
                              borderRadius: 99,
                              borderColor: '#AAAAAA',
                              borderWidth: 0.5,
                              width: 25,
                              height: 25,
                              marginBottom: 1.5,
                            }}
                            resizeMode={'contain'}
                          />
                          <Text style={baseText}>{ef.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
            ) : null}
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
  filterWrapper: {
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  filterRowWrapper: {
    marginVertical: 2.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AppSearchHeader;
