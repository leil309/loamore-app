import {SafeAreaView, ScrollView, Text} from 'react-native';
import {baseText, contentContainer, mainContainer} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';

const Ranking = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <Text style={baseText}>랭킹</Text>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Ranking;
