import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default () => {
  return(<MapView style={styles.map}/>)
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
})
