import {Image, Text, View} from 'react-native';
import {baseCard, baseText} from '~/components/styles';
import {useFindAverageEngravingQuery} from '~/gql/generated/graphql';
import {useAppSelector} from '~/store';

const defaultImg = Image.resolveAssetSource(
  require('assets/default-character.png'),
);

const CompareEngraving = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;

  const {data: topData} = useFindAverageEngravingQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  return (
    <View style={baseCard}>
      <Text style={baseText}>평균 사용 각인</Text>
      {topData?.findAverageEngraving[0].engraving.map((x, index) => {
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
                uri: x.image_uri
                  ? `https://cdn-lostark.game.onstove.com/${x.image_uri}`
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
            <Text style={baseText}>{x.level + ' ' + x.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CompareEngraving;
