import {Image, Text, TouchableOpacity, View} from 'react-native';
import {baseCard, baseText, subText} from '~/components/styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RankingStackParamList} from '~/navigation/types';
import userSlice from '~/slices/userSlice';
import {useAppDispatch} from '~/store';

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
  const dispatch = useAppDispatch();
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
  const navigation = useNavigation<NavigationProp<RankingStackParamList>>();

  return (
    <View style={[baseCard, {marginBottom: 10}]}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          dispatch(userSlice.actions.setCharacter({name: name}));
          dispatch(
            userSlice.actions.setCharacterInfo({
              name: name,
            }),
          );

          navigation.navigate('RankingDetail', {
            name: name,
          });
        }}>
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
      </TouchableOpacity>
    </View>
  );
};
export default RankingCard;
