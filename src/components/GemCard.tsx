import {Dimensions, Image, Text, View} from 'react-native';
import {baseCard, mainContainer} from '~/components/styles';
import {ICharacterGem} from '~/@types';

interface IGemCard {
  gemList?: Array<ICharacterGem> | undefined | null;
}

const GemCard = ({gemList}: IGemCard) => {
  const gemTypeRegex = /\s(홍|멸)/;

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={[mainContainer, {marginTop: 15}]}>
      <View
        style={[
          baseCard,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        {gemList
          ? gemList.map(x => (
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
                    resizeMode: 'contain',
                  }}
                />
                <Image
                  source={{
                    uri: `https://cdn-lostark.game.onstove.com/${x.skill.image_uri}`,
                  }}
                  style={{
                    borderRadius: 10,
                    height: 24,
                    resizeMode: 'contain',
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: '100%',
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
                      },
                    ]}>
                    {x.level}
                    {/* @ts-ignore */}
                    {gemTypeRegex.exec(x.item.name)[1]}
                  </Text>
                </View>
              </View>
            ))
          : null}
      </View>
    </View>
  );
};
export default GemCard;
