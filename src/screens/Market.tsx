import {SafeAreaView, ScrollView, Text} from 'react-native';
import {mainContainer, baseText, contentContainer} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';

const Market = () => {
  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={[contentContainer]}>
        <Text style={baseText}>경매장</Text>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Market;
