import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Map, Modal, Panel } from './components'


export default function App() {
  const[markers, addMarker] = useState([])

  const handleLongPress = ({ nativeEvent }) => {
    const newMarker = markers.concat({ coordinates: nativeEvent.coordinate })

    addMarker(newMarker)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Modal />
      <Panel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
