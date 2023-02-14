import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

const YoutubePopupPlayerComponent = (props) => {
  const onSwipeMove = (percentageShown) => {
    if (percentageShown <= 0.81)
      props.setModalVisible(false)
  }

  return (
    <Modal
      isVisible={props.modalVisible}
      onSwipeMove={(percentageShown) => onSwipeMove(percentageShown)}
      useNativeDriverForBackdrop
      swipeDirection={['down', 'up']}
      style={{width: '100%', margin: 0}}
      backdropColor='black'
      backdropOpacity={0.8}
      animationOut="zoomOut"
    >
      <View style={{backgroundColor: 'white', padding: 20}}>
        <Text>Poupup modal</Text>
      </View>
    </Modal>
  )
}

export default YoutubePopupPlayerComponent;