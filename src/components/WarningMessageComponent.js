import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {pressableSize, messageIconSize, iconColor, textColor} from '../constants/component_constant';
import {messageLabelFontSize} from '../constants/font_size_constant';

const WarningMessageComponent = (props) => {
  const iconName = (!props.hasInternet || props.hasErrorNetwork) ? "wifi-off" : "video-off";
  const message = (!props.hasInternet || props.hasErrorNetwork) ? {en: "No internet connection", km: "មិនមានប្រព័ន្ធអ៊ីនធឺណិត"} : {en: "No video available", km: "មិនមានវីដេអូ"}

  const closeButton = () => {
    return <TouchableOpacity onPress={() => props.closeModal()} style={[styles.closeBtn, props.closeButtonStyle]}>
              <Icon name="x" color={props.iconColor || iconColor} size={24} />
           </TouchableOpacity>
  }

  return (
    <View style={{flex: 1, borderWidth: 0.1, borderColor: 'transparent'}}>
      {closeButton()}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name={iconName} size={props.messageIconSize || messageIconSize} color={props.iconColor || iconColor} />
        <Text style={[styles.msgLabel, props.messageLabelStyle]}>{message[props.locale || 'km']}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  msgLabel: {
    color: textColor,
    fontSize: messageLabelFontSize,
    marginTop: 20
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    width: pressableSize,
    height: pressableSize
  }
})

export default WarningMessageComponent;