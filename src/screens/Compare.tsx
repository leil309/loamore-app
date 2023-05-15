import {SafeAreaView, ScrollView} from 'react-native';
import {contentContainer, mainContainer} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';
import CompareEngraving from '~/components/CompareEngraving';

const Compare = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <CompareEngraving />
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Compare;
