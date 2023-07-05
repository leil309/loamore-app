import {Text, View} from 'react-native';
import {baseText} from '~/components/styles';

interface ICompareStats {
  name?: string;
  stats?: Array<{name: string; value: number}>;
}

const CompareStatsCard = ({stats}: ICompareStats) => {
  return (
    <View>
      {stats
        ? stats.map((x, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={[baseText]}>{x.name}</Text>
                <Text style={[baseText, {fontSize: 20}]}>
                  {x.value.toFixed(0)}
                </Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default CompareStatsCard;
