import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CompareStatsSkeleton = () => {
  return (
    <View style={{marginBottom: 0, flex: 1, padding: 0}}>
      <SkeletonPlaceholder
        borderRadius={20}
        backgroundColor={'#333333'}
        highlightColor={'#444444'}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-between">
          <SkeletonPlaceholder.Item
            borderColor={'#FFFFFF'}
            borderWidth={0.5}
            flexDirection="column"
            alignItems="flex-start"
            width={'48%'}
            borderRadius={25}
            padding={14}>
            <SkeletonPlaceholder.Item
              marginBottom={8}
              width={'100%'}
              alignItems={'center'}>
              <SkeletonPlaceholder.Item width={'40%'} height={14} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={8}>
              <SkeletonPlaceholder.Item
                width={'30%'}
                marginRight={'40%'}
                height={17}
              />
              <SkeletonPlaceholder.Item width={'30%'} height={17} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={8}>
              <SkeletonPlaceholder.Item
                width={'30%'}
                marginRight={'40%'}
                height={17}
              />
              <SkeletonPlaceholder.Item width={'30%'} height={17} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            borderColor={'#FFFFFF'}
            borderWidth={0.5}
            flexDirection="column"
            alignItems="flex-start"
            width={'48%'}
            borderRadius={25}
            padding={14}>
            <SkeletonPlaceholder.Item
              marginBottom={8}
              width={'100%'}
              alignItems={'center'}>
              <SkeletonPlaceholder.Item width={'40%'} height={14} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={8}>
              <SkeletonPlaceholder.Item
                width={'30%'}
                marginRight={'40%'}
                height={17}
              />
              <SkeletonPlaceholder.Item width={'30%'} height={17} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={8}>
              <SkeletonPlaceholder.Item
                width={'30%'}
                marginRight={'40%'}
                height={17}
              />
              <SkeletonPlaceholder.Item width={'30%'} height={17} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
export default CompareStatsSkeleton;
