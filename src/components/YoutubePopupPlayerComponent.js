import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from "react-native-youtube-iframe";

import WarningMessageComponent from './WarningMessageComponent';
import youtubeHelper from '../helpers/youtube_helper';

const YoutubePopupPlayerComponent = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const onSwipeMove = (percentageShown) => {
    if (percentageShown <= 0.81)
      props.closeModal()
  }

  const renderContent = () => {
    if (!!props.videoUrl && props.hasInternet)
      return (
        <View style={{height: '100%', width: "100%", justifyContent: 'center'}}>
          { (props.hasInternet && isLoading) &&
            <ActivityIndicator size="large" color={props.indicatorColor || '#ffffff'} style={{position: 'absolute', alignSelf: 'center'}} />
          }
          <YoutubePlayer
            height={'100%'}
            play={true}
            videoId={youtubeHelper.getVideoId(props.videoUrl)}
            onReady={() => setIsLoading(false)}
            webViewProps={{
              containerStyle: {paddingTop: props.playerPaddingTop || '55%'}
            }}
          />
        </View>
      )

    return <WarningMessageComponent locale={props.locale} hasInternet={props.hasInternet} closeModal={() => props.closeModal()}
              iconColor={props.iconColor} messageLabelStyle={props.messageLabelStyle} messageIconSize={props.messageIconSize} closeButtonStyle={props.closeButtonStyle}
           />
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
      {renderContent()}
    </Modal>
  )
}

export default YoutubePopupPlayerComponent;