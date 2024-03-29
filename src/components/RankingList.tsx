import {contentContainer} from '~/components/styles';
import {FlatList, View} from 'react-native';
import {useInfiniteFindCharacterRankingQuery} from '~/gql/generated/graphql';
import RankingSkeleton from '~/components/skeleton/RankingSkeleton';
import RankingCard from '~/components/RankingCard';
import React, {useCallback} from 'react';

interface IRankingList {
  selectedClass?: Array<string>;
  selectedEngraving?: Array<number>;
}

const RankingList = ({selectedClass, selectedEngraving}: IRankingList) => {
  const PAGE_SIZE = 20;
  const {data, isLoadingError, fetchNextPage, hasNextPage} =
    useInfiniteFindCharacterRankingQuery(
      {
        take: PAGE_SIZE,
        cursor: 0,
        className: selectedClass,
        engravingIds: selectedEngraving,
      },
      {
        getNextPageParam: lastPage => {
          if (lastPage.findCharacterRanking.length === PAGE_SIZE) {
            return {
              cursor:
                lastPage.findCharacterRanking[
                  lastPage.findCharacterRanking.length - 1
                ].id,
            };
          }
        },
        keepPreviousData: true,
      },
    );

  const onEndReached = useCallback(async () => {
    if (hasNextPage) {
      await fetchNextPage().catch(e => console.log(e));
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <View>
      {isLoadingError || !data ? (
        <View style={contentContainer}>
          <RankingSkeleton />
          <RankingSkeleton />
          <RankingSkeleton />
          <RankingSkeleton />
          <RankingSkeleton />
          <RankingSkeleton />
        </View>
      ) : (
        <View>
          <FlatList
            contentContainerStyle={contentContainer}
            ListFooterComponentStyle={{marginBottom: 60}}
            ListFooterComponent={() => <View />}
            onEndReached={onEndReached}
            keyExtractor={(item: any) => item.id}
            onEndReachedThreshold={0.7}
            refreshing={false}
            data={data?.pages?.flatMap(page => page.findCharacterRanking)}
            renderItem={({item, index}) => (
              <View key={index}>
                <RankingCard
                  name={item.name}
                  itemLevel={item.itemLevel}
                  server={item.serverName}
                  className={item.className}
                  classEngraving={item.classEngraving}
                  setItem={item.setItem}
                  imageUri={item.imageUri}
                />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
export default React.memo(RankingList);
