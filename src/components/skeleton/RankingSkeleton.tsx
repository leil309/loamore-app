import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RankingSkeleton = () => {
  return (
    <View style={{marginBottom: 10}}>
      <SkeletonPlaceholder
        borderRadius={20}
        backgroundColor={'#333333'}
        highlightColor={'#444444'}>
        <SkeletonPlaceholder.Item
          borderColor={'#FFFFFF'}
          borderWidth={0.5}
          flexDirection="row"
          alignItems="center"
          width={'100%'}
          borderRadius={25}
          padding={10}>
          <SkeletonPlaceholder.Item
            width={50}
            height={50}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={'#FFFFFF'}
          />
          <SkeletonPlaceholder.Item marginLeft={15} width={'100%'}>
            <SkeletonPlaceholder.Item width={90} height={15} />
            <SkeletonPlaceholder.Item marginTop={6} width={70} height={15} />
            <SkeletonPlaceholder.Item marginTop={6} width={50} height={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
export default RankingSkeleton;
