import {Image, Text, View} from 'react-native';
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {ICharacterGem} from '~/@types';

interface IGemCard {
  gemList?: Array<ICharacterGem> | undefined | null;
}

const GemCard = ({gemList}: IGemCard) => {
  const gemTypeRegex = /\s(홍|멸|청|원)/;

  // gemList = gemList?.sort((a, b) => {
  //   return a.skill_id - b.skill_id;
  // });

  return (
    <View style={[mainContainer, {marginTop: 15}]}>
      <View
        style={[
          baseCard,
          {
            flexDirection: 'row',
            justifyContent:
              gemList?.length === 11 ? 'space-between' : 'flex-start',
            alignItems: 'center',
          },
        ]}>
        {gemList && gemList.length > 0 ? (
          gemList.map(x => (
            <View
              key={x.slot}
              style={{
                marginHorizontal: 2,
                borderRadius: 10,
                borderColor: '#ffb547',
                borderWidth: 0.5,
              }}>
              <Image
                source={{
                  uri: `https://cdn-lostark.game.onstove.com/${x.item.image_uri}`,
                }}
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: 'cover',
                }}
              />
              <Image
                source={{
                  uri: `https://cdn-lostark.game.onstove.com/${x.skill.image_uri}`,
                }}
                style={{
                  borderRadius: 10,
                  height: 24,
                  width: 24,
                  resizeMode: 'cover',
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: '100%',
                  height: 20,
                  borderRadius: 10,
                  borderTopStartRadius: 0,
                  borderTopEndRadius: 0,
                  borderTopColor: '#ffb547',
                  borderTopWidth: 0.5,
                }}>
                <Text
                  style={[
                    {
                      color: '#FFFFFF',
                      fontSize: 12,
                      textAlign: 'center',
                    },
                  ]}>
                  {x.level}
                  {/* @ts-ignore */}
                  {gemTypeRegex.exec(x.item.name)[1]}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={{flex: 1}}>
            <Text
              style={[
                baseText,
                {
                  color: '#939393',
                },
              ]}>
              보석이 없습니다.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default GemCard;
