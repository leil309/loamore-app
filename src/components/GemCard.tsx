import {Text, View} from 'react-native';
import {baseCard, mainContainer, baseText, subText} from '~/components/styles';

interface IGemCard {
  critical: number;
}

const GemCard = ({
  critical,
  specialization,
  domination,
  swiftness,
}: IGemCard) => {
  return (
    <View style={[mainContainer, {marginTop: 15}]}>
      <View style={baseCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>치명</Text>
          <Text style={baseText}>{critical}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>특화</Text>
          <Text style={baseText}>{specialization}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>제압</Text>
          <Text style={baseText}>{domination}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>신속</Text>
          <Text style={baseText}>{swiftness}</Text>
        </View>
      </View>
    </View>
  );
};
export default GemCard;
