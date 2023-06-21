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
              <Text style={baseText}>{x.honing}</Text>
              <Image
                source={{
                  uri: `https://cdn-lostark.game.onstove.com/${x.item.image_uri}`,
                }}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'cover',
                  backgroundColor: x.item.grade === 1 ? '#FFFFFF' : '#333333',
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
                        ? '#2a48a9'
                        : x.quality >= 30
                        ? '#5ea91b'
                        : x.quality >= 10
                        ? '#a19911'
                        : '#980b0b',
                  },
                ]}>
                {x.quality}
              </Text>
              <Text style={baseText}>{x.item.set_name}</Text>
              <Text style={baseText}>{x.item.grade}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default GearCard;
