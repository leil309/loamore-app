import {ActivityIndicator, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {baseCard, baseText} from '~/components/styles';

interface ILoadingModal {
  visible: boolean;
}

const LoadingModal = ({visible}: ILoadingModal) => {
  return (
    <Modal
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      animationOut={'fadeOut'}
      animationIn={'fadeIn'}
      backdropOpacity={0.5}
      isVisible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={[
            baseCard,
            {
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator size={'large'} color={'#FFFFFF'} />
          <Text style={baseText}>로딩중...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
