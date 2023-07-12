import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CompareEngravingSkeleton = () => {
  return (
    <View style={{marginBottom: 0, flex: 1, padding: 0}}>
      <SkeletonPlaceholder
        borderRadius={20}
        backgroundColor={'#333333'}
        highlightColor={'#444444'}>
        <SkeletonPlaceholder.Item
          borderColor={'#FFFFFF'}
          borderWidth={0.5}
          flexDirection="column"
          alignItems="flex-start"
          width={'100%'}
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
            alignItems="center"
            marginBottom={8}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            marginBottom={8}
            width={'100%'}
            alignItems={'center'}>
            <SkeletonPlaceholder.Item width={'100%'} height={1} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={2}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={2}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={2}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={2}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={2}>
            <SkeletonPlaceholder.Item
              width={28}
              height={28}
              borderRadius={20}
              borderWidth={0.5}
              borderColor={'#FFFFFF'}
            />
            <SkeletonPlaceholder.Item marginLeft={10} flex={1} height={17} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
export default CompareEngravingSkeleton;
