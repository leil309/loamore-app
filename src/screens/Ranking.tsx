import {SafeAreaView} from 'react-native';
import {mainContainer} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';
import RankingList from '~/components/RankingList';

const Ranking = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <RankingList />
      <AppHeader />
    </SafeAreaView>
  );
};
export default Ranking;
