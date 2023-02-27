import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  baseCard,
  baseText,
  contentContainer,
  mainContainer,
  subText,
} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';

const Ranking = () => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              최고성능의가드 <Text style={subText}>1584</Text>
            </Text>

            <Text style={subText}>워로드</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>고독한기사 3</Text>
            <Text style={subText}>전투태세 1</Text>
            <Text style={subText}>사멸 6</Text>
          </View>
        </View>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/armory/5/881C0D6FAAEA9BCE4CF083F4D7DE90351442A2A8F315172E65EA2C8856695072.png?v=20230226034703',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              트리닐호랑이 <Text style={subText}>1620</Text>
            </Text>

            <Text style={subText}>스트라이커</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>일격필살 3</Text>
            <Text style={subText}>사멸 6</Text>
          </View>
        </View>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/profile/8/75DBA8A59108FF1DAE0CA7B16A9EE9D382A3375BFF0CAEE2CBF113B4765FEAAE.PNG',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              물타리연못 <Text style={subText}>1600</Text>
            </Text>

            <Text style={subText}>바드</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>절실한구원 3</Text>
            <Text style={subText}>갈망 6</Text>
          </View>
        </View>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              최고성능의가드 <Text style={subText}>1584</Text>
            </Text>

            <Text style={subText}>워로드</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>고독한기사 3</Text>
            <Text style={subText}>전투태세 1</Text>
            <Text style={subText}>사멸 6</Text>
          </View>
        </View>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              최고성능의가드 <Text style={subText}>1584</Text>
            </Text>

            <Text style={subText}>워로드</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>고독한기사 3</Text>
            <Text style={subText}>전투태세 1</Text>
            <Text style={subText}>사멸 6</Text>
          </View>
        </View>
        <View style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              overflow: 'hidden',
              width: 50,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              marginRight: 10,
            }}>
            <Image
              source={{
                url: 'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
              }}
              style={{
                top: -25,
                width: 50,
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={baseText}>
              최고성능의가드 <Text style={subText}>1584</Text>
            </Text>

            <Text style={subText}>워로드</Text>
            <Text style={subText}>카제로스</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={subText}>고독한기사 3</Text>
            <Text style={subText}>전투태세 1</Text>
            <Text style={subText}>사멸 6</Text>
          </View>
        </View>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};
export default Ranking;
