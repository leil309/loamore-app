import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface ICharacterCard {
  imageUri?: string;
}
const CharacterCard = ({imageUri}: ICharacterCard) => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  const width = Dimensions.get('window').width;
  const height = defaultImg.height * (width / defaultImg.width);

  const source = imageUri
    ? {uri: imageUri}
    : {source: require('assets/default-character.png')};

  return (
    <View style={styles.container}>
      <Image
        defaultSource={defaultImg}
        resizeMode={'contain'}
        source={source}
        style={[{width: width, height: height}]}
      />
      <Text style={{color: '#FFFFFF'}}>123123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CharacterCard;
