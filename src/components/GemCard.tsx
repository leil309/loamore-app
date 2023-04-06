import {Image, Text, View} from 'react-native';
import {baseCard, mainContainer} from '~/components/styles';
import {ICharacterGem} from '~/@types';

interface IGemCard {
  gemList?: Array<ICharacterGem> | undefined | null;
}

const GemCard = ({gemList}: IGemCard) => {
  const gemTypeRegex = /\s(홍|멸)/;

  return (
    <View style={[mainContainer, {marginTop: 15}]}>
      <View style={[baseCard, {flexDirection: 'row'}]}>
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
                    width: 25,
                    height: 25,
                    resizeMode: 'cover',
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: '100%',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#FFFFFF'}}>
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
