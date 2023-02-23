import {Text, View} from 'react-native';
import {baseCard, mainContainer, baseText, subText} from '~/components/styles';

interface IStatCard {
  name: string;
  level: string;
  server: string;
  guild: string;
}

const StatCard = ({name, level, server, guild}: IStatCard) => {
  return (
    <View style={[mainContainer, {marginTop: 15}]}>
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
          <Text style={subText}>길드</Text>
          <Text style={baseText}>{guild}</Text>
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
