import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  baseCard,
  baseText,
  contentContainer,
  mainContainer,
} from '~/components/styles';
import AppHeader from '~/components/common/AppHeader';
import {EngravingList} from '~/components/EngravingList';
import {
  IClassYn,
  useFindAverageEngravingQuery,
  useFindAverageStatsQuery,
  useFindAverageWeaponQuery,
  useFindCharacterQuery,
} from '~/gql/generated/graphql';
import {useAppSelector} from '~/store';
import {IEngraving} from '~/@types';
import CompareStatsCard from '~/components/CompareStatsCard';
import {getQualityColor} from '~/components/common/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CompareWeaponQualitySkeleton from '~/components/skeleton/CompareWeaponQualitySkeleton';
import CompareStatsSkeleton from '~/components/skeleton/CompareStatsSkeleton';
import CompareEngravingSkeleton from '~/components/skeleton/CompareEngravingSkeleton';

interface IWeaponQualityBar {
  quality: number;
}

const Compare = () => {
  const characterName = useAppSelector(state => state.user.characterName)?.name;

  const {data} = useFindCharacterQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );
  const {
    data: topData,
    isLoadingError: aveEngravingLoading,
    isFetching: aveEngravingFetching,
  } = useFindAverageEngravingQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const {
    data: topStats,
    isLoadingError: topStatsLoading,
    isFetching: topStatsFetching,
  } = useFindAverageStatsQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const {
    data: aveWeaponQuality,
    isLoadingError: aveWeaponLoading,
    isFetching: aveWeaponFetching,
  } = useFindAverageWeaponQuery(
    {name: characterName || ''},
    {enabled: !!characterName},
  );

  const classEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving.filter(
        x => x.engraving.class_yn === IClassYn.Y,
      )
    : null;
  const myEngraving = data?.findCharacter.character_engraving
    ? data?.findCharacter.character_engraving
        .filter(x => x.engraving.class_yn === IClassYn.N)
        .sort((a, b) => a.engraving.id - b.engraving.id)
    : null;
  const rankerEngraving: Array<IEngraving> | null | undefined =
    topData?.findAverageEngraving[0].engraving.map(x => {
      return {
        id: x.id,
        level: x.level,
        slot: 0,
        engraving: {
          class_yn: x.class_yn,
          id: x.id,
          image_uri: x.image_uri,
          info: '',
          name: x.name,
        },
      };
    });
  const battleStats = [
    {value: data?.findCharacter.critical || 0, name: '치명'},
    {value: data?.findCharacter.specialization || 0, name: '특화'},
    {value: data?.findCharacter.domination || 0, name: '제압'},
    {value: data?.findCharacter.swiftness || 0, name: '신속'},
    {value: data?.findCharacter.endurance || 0, name: '인내'},
    {value: data?.findCharacter.expertise || 0, name: '숙련'},
  ];

  const mainStats = battleStats
    .filter(x => x.value >= 150)
    .sort((a, b) => {
      return b.value - a.value;
    });

  return (
    <SafeAreaView style={mainContainer}>
      <ScrollView contentContainerStyle={contentContainer}>
        <View style={baseCard}>
          <Text style={baseText}>주 스펙 비교</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={[baseCard, {width: '48%'}]}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/*<MaterialIcons name={'person'} color={'#FFFFFF'} size={20} />*/}
              <Text style={baseText}>내 각인</Text>
            </View>
            <EngravingList
              classEngraving={classEngraving}
              battleEngraving={myEngraving}
            />
          </View>
          {!aveEngravingLoading && !aveEngravingFetching ? (
            <View style={[baseCard, {width: '48%'}]}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/*<MaterialIcons name={'people'} color={'#FFFFFF'} size={20} />*/}
                <Text style={baseText}>평균 각인</Text>
              </View>
              <EngravingList
                classEngraving={classEngraving}
                battleEngraving={rankerEngraving}
              />
            </View>
          ) : (
            <View style={{width: '48%'}}>
              <CompareEngravingSkeleton />
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          {!topStatsLoading && !topStatsFetching ? (
            <>
              <View style={[baseCard, {width: '48%'}]}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {/*<MaterialIcons name={'people'} color={'#FFFFFF'} size={20} />*/}
                  <Text style={baseText}>내 스탯</Text>
                </View>
                <CompareStatsCard stats={mainStats} />
              </View>
              <View style={[baseCard, {width: '48%'}]}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {/*<MaterialIcons name={'people'} color={'#FFFFFF'} size={20} />*/}
                  <Text style={baseText}>평균 스탯</Text>
                </View>
                <CompareStatsCard stats={topStats?.findAverageStats[0].stats} />
              </View>
            </>
          ) : (
            <CompareStatsSkeleton />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          {!aveWeaponLoading && !aveWeaponFetching ? (
            <View style={[baseCard]}>
              <Text style={baseText}>무기품질</Text>

              {data?.findCharacter.character_gear &&
              data?.findCharacter.character_gear.length > 0 ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons name={'person'} color={'#FFFFFF'} size={20} />
                  <WeaponQualityBar
                    quality={data?.findCharacter.character_gear[0].quality}
                  />
                </View>
              ) : null}

              {aveWeaponQuality ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons name={'people'} color={'#FFFFFF'} size={20} />
                  <WeaponQualityBar
                    quality={aveWeaponQuality.findAverageWeapon}
                  />
                </View>
              ) : null}
            </View>
          ) : (
            <CompareWeaponQualitySkeleton />
          )}
        </View>
      </ScrollView>
      <AppHeader />
    </SafeAreaView>
  );
};

const WeaponQualityBar = ({quality}: IWeaponQualityBar) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#3c3d3f',
        flexDirection: 'row',
        borderTopColor: '#050510',
        borderColor: '#131318',
        borderBottomColor: '#181825',
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 5,
      }}>
      <View
        style={{
          width: quality + '%',
          backgroundColor: getQualityColor(quality),
          borderRadius: 20,
        }}>
        <Text style={[baseText, {marginLeft: 5, textAlign: 'left'}]}>
          {quality}
        </Text>
      </View>
    </View>
  );
};

export default Compare;
