import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//export default class MapScreen extends React.Component {
//  render() {
const MapScreen = function () { 
  const [postCode, setPostCode] = useState ();
  const postCodeChangeHandler = text => {
    setPostCode(text);
  };
  
return (

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter Post Code...' 
            returnKeyType='send'
            keyboardType= 'default'
            style={styles.textInput}
            onChangeText={postCodeChangeHandler}
          />
          <View style={styles.submitButton}>
            <Button title='Submit'/>
          </View>
        </View>
        <MapView style={styles.mapStyle} 
            showsUserLocation = {true}
            followUserLocation = {false}
            zoomEnabled = {true}
            // initialRegion={{
            //   latitude: 51.5230,
            //   longitude: 0.0803,
            //   latitudeDelta: 0.0922,
            //   longitudeDelta: 0.0421,
            // }}
            />
      </View>
    );
  }


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
