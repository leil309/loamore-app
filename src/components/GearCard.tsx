import {Image, Text, View} from 'react-native';
import {ICharacterGear} from '~/@types';
import {baseCard, baseText, mainContainer} from '~/components/styles';

interface IGearCard {
  gearList?: Array<ICharacterGear> | undefined | null;
}

const GearCard = ({gearList}: IGearCard) => {
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
        {gearList?.map(x => {
          return (
            <View
              key={x.slot}
              style={{
                marginHorizontal: 2,
                borderRadius: 10,
                borderColor: '#ffb547',
                borderWidth: 0.5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {x.honing && x.honing > 0 ? (
                  <Text style={baseText}>{x.honing + '+'}</Text>
                ) : null}
              </View>
              <Image
                source={{
                  uri: `https://cdn-lostark.game.onstove.com/${x.item.image_uri}`,
                }}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'cover',
                  backgroundColor:
                    x.item.grade === 7
                      ? '#288d8d'
                      : 6
                      ? '#b7a68d'
                      : 5
                      ? '#703116'
                      : 4
                      ? '#705116'
                      : 3
                      ? '#3e1670'
                      : 2
                      ? '#164b70'
                      : 1
                      ? '#2d7016'
                      : '#313131',
                }}
              />
              <Text
                style={[
                  baseText,
                  {
                    backgroundColor:
                      x.quality >= 100
                        ? '#de7016'
                        : x.quality >= 90
                        ? '#b92bd0'
                        : x.quality >= 70
                        ? '#3361b6'
                        : x.quality >= 30
                        ? '#5ea91b'
                        : x.quality >= 10
                        ? '#a19911'
                        : '#980b0b',
                  },
                ]}>
                {x.quality}
              </Text>
              <Text style={[baseText, {fontSize: 12}]}>
                {x.item.grade === 7 ? '에스더' : x.item.set_name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default GearCard;
