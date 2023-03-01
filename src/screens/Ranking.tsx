import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  baseCard,
  baseText,
  contentContainer,
  mainContainer,
  subText,
} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';

const tempData = [
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '트리닐호랑이',
    itemLevel: '1620',
    server: '카제로스',
    chClass: '스트라이커',
    classEngraving: ['일격필살 3'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/armory/5/881C0D6FAAEA9BCE4CF083F4D7DE90351442A2A8F315172E65EA2C8856695072.png?v=20230227104641',
  },
  {
    name: '물타리연못',
    itemLevel: '1600',
    server: '카제로스',
    chClass: '바드',
    classEngraving: ['절실한구원 3'],
    gearSet: ['갈망 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/8/75DBA8A59108FF1DAE0CA7B16A9EE9D382A3375BFF0CAEE2CBF113B4765FEAAE.PNG',
  },
  {
    name: '버서커병아리',
    itemLevel: '1420',
    server: '카제로스',
    chClass: '버서커',
    classEngraving: ['광전사의 비기 1'],
    gearSet: [],
    imgUri:
      'https://img.lostark.co.kr/profile/3/72641F44C76310E33BE246BFDC2FAD797AA8204116EAE12DAF4E945BDF882167.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
  {
    name: '최고성능의가드',
    itemLevel: '1584',
    server: '카제로스',
    chClass: '워로드',
    classEngraving: ['고독한기사 3', '전투태세 1'],
    gearSet: ['사멸 6'],
    imgUri:
      'https://img.lostark.co.kr/profile/6/D9C1ADF3C49309C1C75C4FD20F1069CFCB53FAD262E44E2D09270D1D9F9E0DB7.PNG',
  },
];
const Ranking = () => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  return (
    <SafeAreaView style={mainContainer}>
      <FlatList
        contentContainerStyle={contentContainer}
        ListFooterComponentStyle={{marginBottom: 60}}
        ListFooterComponent={() => <View />}
        data={tempData}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={[baseCard, {flexDirection: 'row', marginBottom: 10}]}>
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
                defaultSource={defaultImg}
                source={{
                  uri: item.imgUri,
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
                {item.name} <Text style={subText}>{item.itemLevel}</Text>
              </Text>

              <Text style={subText}>{item.chClass}</Text>
              <Text style={subText}>{item.server}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              {item.classEngraving.map((engraving, engravingIdx) => (
                <Text key={engravingIdx} style={subText}>
                  {engraving}
                </Text>
              ))}
              {item.gearSet.map((gear, gearIdx) => (
                <Text key={gearIdx} style={subText}>
                  {gear}
                </Text>
              ))}
            </View>
          </View>
        )}
      />
      <AppHeader />
    </SafeAreaView>
  );
};
export default Ranking;
