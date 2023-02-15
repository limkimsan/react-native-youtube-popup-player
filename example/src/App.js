import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import YoutubePopupPlayer from 'react-native-youtube-popup-player';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <View style={{flexGrow: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show modal</Text>
      </TouchableOpacity>

      <FeatherIcon name="search" size={20} color='black' style={{marginTop: 20}} />

      <YoutubePopupPlayer videoUrl="https://www.youtube.com/watch?v=sKJmxEmqzfk"
        modalVisible={modalVisible}
        setModalVisible={(status) => setModalVisible(status)}
        indicatorColor="yellow"
      />
    </View>
  );
}