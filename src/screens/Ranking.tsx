import {SafeAreaView} from 'react-native';
import {mainContainer} from '~/components/styles';
import RankingList from '~/components/RankingList';
import AppSearchHeader from '~/components/common/AppSearchHeader';
import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '~/store/reducder';
import * as _ from 'lodash';

const Ranking = () => {
  const [selectedClass, setSelectedClass] = useState<string[]>([]);
  const [selectedEngraving, setSelectedEngraving] = useState<number[]>([]);

  const findClass = useSelector((state: RootState) => state.filter.findClass);
  const [classFilter, setClassFilter] = useState(
    Object.entries(
      _.groupBy(
        findClass.map(x => {
          return {
            ...x,
            selected: false,
          };
        }),
        'type',
      ),
    ),
  );

  useFocusEffect(
    useCallback(() => {
      setClassFilter(
        Object.entries(
          _.groupBy(
            findClass.map(x => {
              return {
                ...x,
                selected: false,
              };
            }),
            'type',
          ),
        ),
      );
      setSelectedClass([]);
    }, [findClass]),
  );

  return (
    <SafeAreaView style={mainContainer}>
      <RankingList
        selectedClass={selectedClass}
        selectedEngraving={selectedEngraving}
      />
      <AppSearchHeader
        rankingFilter={true}
        setSelectedClass={setSelectedClass}
        setSelectedEngraving={setSelectedEngraving}
        setClassFilter={setClassFilter}
        classFilter={classFilter}
      />
    </SafeAreaView>
  );
};
export default Ranking;
