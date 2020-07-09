import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//export default class MapScreen extends React.Component {
//  render() {
const MapScreen = function () { 
return (

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter Post Code...' 
            returnKeyType='send'
            style={styles.textInput}
          />
          <View style={styles.submitButton}>
            <Button title='Submit' onPress={getInitialState}/>
          </View>
        </View>
        <MapView style={styles.mapStyle} 
            initialRegion={{
              latitude: 51.5230,
              longitude: 0.0803,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          }/>
      </View>
    );
  }

const getInitialState = () =>
{
  return{
    steInitialRegion: {
      latitude: 51.5230,
      longitude: 0.0803,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
}}};


const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    //paddingTop: 50,
    padding:10,
    fontSize: 25,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  submitButton: {
    position: 'absolute',
    right: 30,
    paddingTop: 35,
    
  },
  inputContainer: {
    backgroundColor: '#F1F0EE',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15
  },
});

export default MapScreen;
