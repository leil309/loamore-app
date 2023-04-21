import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IAppHeader {
  canBack: boolean;
}
const AppHeader = ({canBack = false}: IAppHeader) => {
  const navigation = useNavigation();
  const osHeight = Platform.OS === 'ios' ? 40 : 44;
  const statusBarHeight =
    Platform.OS === 'ios'
      ? getStatusBarHeight(true)
      : StatusBar?.currentHeight || 0;

  console.log(StatusBar.currentHeight);

  return (
    <View style={[{height: osHeight + statusBarHeight}, styles.blurContainer]}>
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
            height: osHeight + (StatusBar?.currentHeight || 0),
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
        {!canBack ? (
          <Text style={styles.headerText}>LoaMore</Text>
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={'#707375'} size={30} />
          </Pressable>
        )}
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
  text: {
    color: '#FFFFFF',
  },
  headerText: {
    color: '#707375',
    fontSize: 23,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AppHeader;
