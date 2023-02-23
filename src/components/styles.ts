import {StyleSheet} from 'react-native';

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
    width: '100%',
    borderWidth: 0,
    backgroundColor: '#15181d',
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
});

export const baseContainer = styles.container;
export const baseWrapper = styles.wrapper;
export const baseCard = styles.card;
export const baseText = styles.text;
export const subText = styles.subText;
export const appHeader = styles.header;
export const characterImage = styles.characterImage;
