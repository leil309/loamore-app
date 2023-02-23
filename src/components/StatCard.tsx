import {Text, View} from 'react-native';
import {baseCard, baseContainer, baseText, subText} from '~/components/styles';

interface IStatCard {
  name: string;
  level: string;
  server: string;
}

const StatCard = ({name, level, server}: IStatCard) => {
  return (
    <View style={[baseContainer, {marginTop: 15}]}>
      <View style={baseCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>이름</Text>
          <Text style={baseText}>{name}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>레벨</Text>
          <Text style={baseText}>{level}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={subText}>서버</Text>
          <Text style={baseText}>{server}</Text>
        </View>
      </View>
    </View>
  );
};
export default StatCard;
