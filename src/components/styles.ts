import {StyleSheet} from 'react-native';
import {Colors} from '~/components/common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export const baseContainer = styles.container;
export const baseWrapper = styles.wrapper;
export const baseCard = styles.card;
export const appHeader = styles.header;
export const characterImage = styles.characterImage;
