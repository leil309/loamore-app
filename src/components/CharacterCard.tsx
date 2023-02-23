import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '~/components/common/Colors';

interface ICharacterCard {
  imageUri?: string;
}
const CharacterCard = ({imageUri}: ICharacterCard) => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  const width = Dimensions.get('screen').width;
  const height = defaultImg.height * (width / defaultImg.width);

  const source = imageUri
    ? {uri: imageUri}
    : {source: require('assets/default-character.png')};

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: Colors.imageBackgroundColor},
        ]}>
        <Image
          defaultSource={defaultImg}
          resizeMode={'contain'}
          source={source}
          style={[{height: height}, styles.image]}
        />
      </View>
      <Text style={{color: '#FFFFFF'}}>123123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  wrapper: {
    width: '100%',
    borderWidth: 0,
    backgroundColor: '#15181d',
    padding: 5,
    borderRadius: 25,
  },
  image: {
    width: '100%',
  },
});
export default CharacterCard;
