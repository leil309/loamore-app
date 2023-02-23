import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[{height: Platform.OS === 'ios' ? 80 : 40}, styles.blurContainer]}>
      <BlurView
        reducedTransparencyFallbackColor={'#FFFFFF'}
        style={styles.blurContainer}
        blurType={'dark'}
        blurAmount={100}
      />
      <View style={styles.wrapper}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.title}>BACK</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.title}>BACK</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.title}>Loamore</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AppHeader;
