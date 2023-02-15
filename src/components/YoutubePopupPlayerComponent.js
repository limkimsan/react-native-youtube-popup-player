import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import NetInfo from '@react-native-community/netinfo';
import YoutubePlayer from "react-native-youtube-iframe";

import WarningMessageComponent from './WarningMessageComponent';
import youtubeHelper from '../helpers/youtube_helper';

const YoutubePopupPlayerComponent = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInternet, setHasInternet] = useState(true);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const onSwipeMove = (percentageShown) => {
    if (percentageShown <= 0.81)
      props.setModalVisible(false)
  }

  const renderContent = () => {
    console.log('has internet connection == ', hasInternet)

    if (!!props.videoUrl && hasInternet)
      return (
        <View style={{height: '100%', width: "100%", justifyContent: 'center'}}>
          { (hasInternet && isLoading) &&
            <ActivityIndicator size="large" color={props.indicatorColor || 'white'} style={{position: 'absolute', alignSelf: 'center'}} />
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

    return <WarningMessageComponent locale='km' hasInternet={hasInternet} closeModal={() => props.setModalVisible(false)}  />
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
      { !!props.videoUrl && renderContent()}
    </Modal>
  )
}

export default YoutubePopupPlayerComponent;