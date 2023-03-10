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

const AppHeader = () => {
  const navigation = useNavigation();
  const statusBarHeight =
    Platform.OS === 'ios'
      ? getStatusBarHeight(true)
      : StatusBar?.currentHeight || 0;

  console.log(StatusBar.currentHeight);

  return (
    <View style={[{height: 44 + statusBarHeight}, styles.blurContainer]}>
      <BlurView
        reducedTransparencyFallbackColor={'#FFFFFF'}
        style={styles.blurContainer}
        blurType={'dark'}
        blurAmount={Platform.OS === 'ios' ? 20 : 25}
      />
      {Platform.OS === 'ios' ? (
        <View style={{height: 40}} />
      ) : (
        <View
          style={{
            height: 44 + (StatusBar?.currentHeight || 0),
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
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>LOA</Text>
        </Pressable>
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
