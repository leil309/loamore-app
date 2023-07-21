import Modal from 'react-native-modal';
import {Pressable, Text, View} from 'react-native';
import {baseCard, baseText} from '~/components/styles';

interface IAlertModal {
  visible: boolean;
  message: string;
  hideModal: Function;
}

const AlertModal = ({visible, hideModal, message = ''}: IAlertModal) => {
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
      isVisible={visible}
      onBackdropPress={() => hideModal()}
      onBackButtonPress={() => hideModal()}>
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
          <Text style={baseText}>{message}</Text>
          <Pressable
            style={{
              marginTop: 20,
              borderWidth: 0.5,
              borderColor: '#AAAAAA',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
            onPress={() => hideModal()}>
            <Text style={baseText}>확인</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
