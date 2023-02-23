import {SafeAreaView, ScrollView, Text} from 'react-native';
import {mainContainer, baseText, contentContainer} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';

const Compare = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <Text style={baseText}>분석</Text>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Compare;
