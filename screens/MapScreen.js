import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//export default class MapScreen extends React.Component {
//  render() {
const MapScreen = function () { 
return (
        
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
            initialRegion={{
                latitude: 51.5230,
                longitude: 0.0803,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}/>
      </View>
    );
  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
