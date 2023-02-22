import {Text, View, Animated, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {appHeader} from '~/components/styles';
import {BlurView} from '@react-native-community/blur';

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.blurContainer}>
      <BlurView style={styles.blurContainer} blurType={'dark'} blurAmount={100}>
        <View style={styles.wrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.title}>BACK</Text>
          </Pressable>
          <Text style={styles.title}>Loamore</Text>
        </View>
      </BlurView>
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
    height: 45,
    zIndex: 5,
    elevation: 5,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    textAlign: 'center',
    paddingHorizontal: 10,
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
