import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import YoutubePopupPlayer from 'react-native-youtube-popup-player';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <View style={{flexGrow: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show modal</Text>
      </TouchableOpacity>

      <YoutubePopupPlayer modalVisible={modalVisible} setModalVisible={(status) => setModalVisible(status)} />
    </View>
  );
}