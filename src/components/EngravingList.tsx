import {Image, Text, View} from 'react-native';
import {IEngraving} from '~/@types';
import {baseText} from '~/components/styles';

interface IEngravingList {
  classEngraving: Array<IEngraving> | undefined | null;
  battleEngraving: Array<IEngraving> | undefined | null;
}

const defaultImg = Image.resolveAssetSource(
  require('assets/default-character.png'),
);
export const EngravingList = ({
  classEngraving,
  battleEngraving,
}: IEngravingList) => {
  return (
    <View>
      {classEngraving
        ? classEngraving.map((x, index) => EngravingItem(x, index))
        : null}
      <View
        style={{
          borderColor: '#FFFFFF',
          borderBottomWidth: 0.5,
          borderTopWidth: 0.5,
          marginVertical: 4,
        }}
      />
      {battleEngraving
        ? battleEngraving.map((x, index) => EngravingItem(x, index))
        : null}
    </View>
  );
};

const EngravingItem = (x: IEngraving, index: number) => {
  return (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        defaultSource={defaultImg}
        source={{
          uri: x.engraving.image_uri
            ? `https://cdn-lostark.game.onstove.com/${x.engraving.image_uri}`
            : defaultImg.uri,
        }}
        style={{
          borderRadius: 99,
          borderColor: '#AAAAAA',
          borderWidth: 0.5,
          width: 30,
          height: 30,
          marginRight: 10,
          marginBottom: 1.5,
        }}
        resizeMode={'contain'}
      />
      <Text
        style={[
          baseText,
          {
            textAlign: 'left',
          },
        ]}>
        {x.level + ' ' + x.engraving.name}
      </Text>
    </View>
  );
};
