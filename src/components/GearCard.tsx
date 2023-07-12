import {Image, Text, View} from 'react-native';
import {ICharacterGear} from '~/@types';
import {baseCard, baseText, mainContainer} from '~/components/styles';
import {
  getGradeBackgroundColor,
  getQualityColor,
} from '~/components/common/Colors';

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
                  backgroundColor: getGradeBackgroundColor(x.item.grade),
                }}
              />
              <Text
                style={[
                  baseText,
                  {
                    backgroundColor: getQualityColor(x.quality),
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
