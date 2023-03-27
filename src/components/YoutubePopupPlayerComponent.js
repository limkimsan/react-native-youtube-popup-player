import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import NetInfo from '@react-native-community/netinfo'
import YoutubeIframePlayer from 'react-native-youtube-iframe-player';

import WarningMessageComponent from './WarningMessageComponent';

const YoutubePopupPlayerComponent = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInternet, setHasInternet] = React.useState(true)
  const [hasErrorNetwork, setHasErrorNetwork] = useState(false);
  const isLoadingRef = useRef(isLoading);
  const hasInternetRef = useRef(true);
  useEffect(() => {
    let timeout = null
    if (props.modalVisible) {
      NetInfo.fetch().then(state => {
        if (hasInternet != state.isConnected)
          setHasInternet(state.isConnected)
      });
      setIsLoading(true);
      setHasErrorNetwork(false);
      hasInternetRef.current = hasInternet
      isLoadingRef.current = true
      timeout = setTimeout(() => {
        setHasErrorNetwork(hasInternetRef.current && isLoadingRef.current);
      }, 25000);
    }

    return () => !!timeout && clearTimeout(timeout)
  }, [props.modalVisible])

  const onSwipeMove = (percentageShown) => {
    if (percentageShown <= 0.81)
      props.closeModal()
  }

  const onReady = () => {
    setIsLoading(false)
    isLoadingRef.current = false;
  }

  const renderContent = () => {
    if (!!props.videoUrl && hasInternet && !hasErrorNetwork)
      return (
        <View style={{height: '100%', width: "100%", justifyContent: 'center'}}>
          <YoutubeIframePlayer
            videoUrl={props.videoUrl}
            height={props.height}
            width='100%'
            locale={props.locale}
            durationFontSize={props.durationFontSize}
            loadingColor={props.indicatorColor || '#ffffff'}
            isTablet={props.isTablet}
            onReady={() => onReady()}
          />
        </View>
      )

    return <WarningMessageComponent locale={props.locale} hasInternet={hasInternet} hasErrorNetwork={hasErrorNetwork} closeModal={() => props.closeModal()}
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