import {contentContainer} from '~/components/styles';
import {FlatList, View} from 'react-native';
import {useInfiniteFindCharacterRankingQuery} from '~/gql/generated/graphql';
import RankingSkeleton from '~/components/skeleton/RankingSkeleton';
import RankingCard from '~/components/RankingCard';
import React, {useCallback} from 'react';
import {useQueryClient} from 'react-query';

const RankingList = () => {
  const PAGE_SIZE = 10;

  const {data, isLoadingError, fetchNextPage, hasNextPage} =
    useInfiniteFindCharacterRankingQuery(
      {
        take: PAGE_SIZE,
        cursor: 0,
      },
      {
        getNextPageParam: lastPage => {
          if (lastPage.findCharacterRanking.length === PAGE_SIZE) {
            console.log(
              lastPage.findCharacterRanking[
                lastPage.findCharacterRanking.length - 1
              ].id,
            );
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
      console.log(hasNextPage);
      await fetchNextPage().catch(e => console.log(e));
    }
  }, [fetchNextPage, hasNextPage]);

  const queryClient = useQueryClient();
  const onRefresh = useCallback(async () => {
    await queryClient.invalidateQueries(['FindCharacterRanking.infinite']);
  }, [queryClient]);

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
        <FlatList
          contentContainerStyle={contentContainer}
          ListFooterComponentStyle={{marginBottom: 60}}
          ListFooterComponent={() => <View />}
          onEndReached={onEndReached}
          keyExtractor={(item: any) => item.id}
          onEndReachedThreshold={0.5}
          refreshing={false}
          onRefresh={onRefresh}
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
      )}
    </View>
  );
};
export default RankingList;
