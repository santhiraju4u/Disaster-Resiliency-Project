import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Home from './images/home.png';

export default function App() {
  return (
    <View style={styles.homeScreen}>
      <View>
        <Image source={Home}/>
        <Button title="SIGNUP NOW"></Button>
      </View>
    </View>
    
  );
  //return React.createElement('div',{className: 'styles'},React.createElement('h1',null,'hello there'));
  };
const styles = StyleSheet.create({
  homeScreen: {
    padding: 150,
    flexDirection: 'column',
    alignItems: 'center',
  }, 
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
