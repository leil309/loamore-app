import {Image, Text, View} from 'react-native';
import {baseCard, baseText, subText} from '~/components/styles';

export interface IRankingCard {
  name: string;
  itemLevel: number;
  server: string;
  className: string;
  classEngraving?: string[] | null | undefined;
  setItem?: string[] | null | undefined;
  imageUri: string;
}

const RankingCard = ({
  name,
  itemLevel,
  server,
  className,
  classEngraving,
  setItem,
  imageUri,
}: IRankingCard) => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  const imageTop =
    className === '도화가'
      ? -62
      : className === '리퍼'
      ? -13
      : className === '기상술사'
      ? -62
      : -25;

  return (
    <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
      <View
        style={{
          alignItems: 'flex-end',
          alignSelf: 'center',
          overflow: 'hidden',
          width: 50,
          height: 50,
          borderRadius: 20,
          borderWidth: 0.5,
          borderColor: '#FFFFFF',
          marginRight: 10,
        }}>
        <Image
          defaultSource={defaultImg}
          source={{
            uri: imageUri,
          }}
          style={{
            top: imageTop,
            width: 50,
            height: 250,
            resizeMode: 'cover',
          }}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={baseText}>
          {name} <Text style={subText}>{itemLevel}</Text>
        </Text>

        <Text style={subText}>{className}</Text>
        <Text style={subText}>{server}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {classEngraving
          ? classEngraving.map((engraving, engravingIdx) => (
              <Text key={engravingIdx} style={subText}>
                {engraving}
              </Text>
            ))
          : null}
        {setItem
          ? setItem.map((gear, gearIdx) => (
              <Text key={gearIdx} style={subText}>
                {gear}
              </Text>
            ))
          : null}
      </View>
    </View>
  );
};
export default RankingCard;
