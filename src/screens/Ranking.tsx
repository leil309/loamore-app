import {SafeAreaView} from 'react-native';
import {mainContainer} from '~/components/styles';
import RankingList from '~/components/RankingList';
import AppSearchHeader from '~/components/common/AppSearchHeader';

const Ranking = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <RankingList />
      <AppSearchHeader rankingFilter={true} />
    </SafeAreaView>
  );
};
export default Ranking;
