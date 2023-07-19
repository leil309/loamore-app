import {ActivityIndicator, Text, View} from 'react-native';
import {DownloadProgress} from 'react-native-code-push';
import Modal from 'react-native-modal';
import {baseCard, baseText} from '~/components/styles';

interface ICodePushLoadingModal {
  visible: boolean;
  progress: DownloadProgress;
}

const CodePushLoadingModal = ({visible, progress}: ICodePushLoadingModal) => {
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
          <Text style={baseText}>업데이트 진행중 입니다...</Text>
          <Text style={baseText}>
            {Math.floor((progress.receivedBytes / progress.totalBytes) * 100)}%
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CodePushLoadingModal;
