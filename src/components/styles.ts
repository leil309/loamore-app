import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '~/components/common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderWidth: 0,
    backgroundColor: '#1c1f27',
    padding: 15,
    borderRadius: 25,
  },
  header: {
    width: '100%',
    height: 50,
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#AAAAAA',
    opacity: 0.5,
  },
  characterImage: {
    width: 25,
    height: 25,
  },
  text: {
    color: '#e8e8e8',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
  },
  subText: {
    color: '#939393',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 15,
    marginTop: 44 + (Platform.OS === 'ios' ? 0 : StatusBar?.currentHeight || 0),
    paddingBottom: 60,
  },
});

export const mainContainer = styles.container;
export const baseWrapper = styles.wrapper;
export const baseCard = styles.card;
export const baseText = styles.text;
export const subText = styles.subText;
export const contentContainer = styles.contentContainer;
export const appHeader = styles.header;
export const characterImage = styles.characterImage;
