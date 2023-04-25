import {SafeAreaView} from 'react-native';
import {mainContainer} from '~/components/styles';
import RankingList from '~/components/RankingList';
import AppSearchHeader from '~/components/common/AppSearchHeader';
import {useState} from 'react';

const Ranking = () => {
  const [selectedClass, setSelectedClass] = useState<string[]>([]);

  return (
    <SafeAreaView style={mainContainer}>
      <RankingList selectedClass={selectedClass} />
      <AppSearchHeader
        rankingFilter={true}
        setSelectedClass={setSelectedClass}
      />
    </SafeAreaView>
  );
};
export default Ranking;
