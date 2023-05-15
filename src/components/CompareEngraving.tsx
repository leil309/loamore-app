import {Image, Text, View} from 'react-native';
import {baseCard, baseText} from '~/components/styles';
import {
  IClassYn,
  useAnalyzeCharacterQuery,
  useFindCharacterQuery,
} from '~/gql/generated/graphql';
import {useAppSelector} from '~/store';

interface ICompareEngraving {
  data?: Array<{
    id: any;
    level: number;
    slot: number;
    engraving: {
      class_yn: IClassYn;
      id: any;
      image_uri: string;
      info: string;
      name: string;
    };
  }> | null;
}

const defaultImg = Image.resolveAssetSource(
  require('assets/default-character.png'),
);

const CompareEngraving = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;

  const {data} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const {data: topData} = useAnalyzeCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const classEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving.filter(
        x => x.engraving.class_yn === IClassYn.Y,
      )
    : null;
  const normalEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving.filter(
        x => x.engraving.class_yn === IClassYn.N,
      )
    : null;

  return (
    <View style={baseCard}>
      <Text style={baseText}>내 각인</Text>
      <EngravingList data={classEngraving} />
      <View
        style={{
          borderColor: '#FFFFFF',
          borderTopWidth: 0.5,
          marginBottom: 5,
        }}
      />
      <EngravingList data={normalEngraving} />
      {topData?.analyzeCharacter.map((x, index) => (
        <View key={index}>
          <Image
            defaultSource={defaultImg}
            source={{
              uri: x.imageUri
                ? `https://cdn-lostark.game.onstove.com/${x.imageUri}`
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
          <Text style={baseText}>{x.name}</Text>
          <Text style={baseText}>{JSON.parse(x.countByLevel).lv1 || ''}</Text>
          <Text style={baseText}>{JSON.parse(x.countByLevel).lv2 || ''}</Text>
          <Text style={baseText}>{JSON.parse(x.countByLevel).lv3 || ''}</Text>
        </View>
      ))}
    </View>
  );
};

const EngravingList = ({data: engraving}: ICompareEngraving) => {
  return (
    <>
      {engraving
        ? engraving.map((x, index) => {
            return (
              <View
                key={index}
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  },
                ]}>
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
                <Text style={[baseText, {textAlign: 'left'}]}>
                  {x.level + ' ' + x.engraving.name}
                </Text>
              </View>
            );
          })
        : null}
    </>
  );
};
export default CompareEngraving;
