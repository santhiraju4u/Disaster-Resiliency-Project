import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from '../screens/ChatScreen';
import MapScreen from '../screens/MapScreen';

function HomeScreenRender() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ChatScreenRender() {
  return (
    <ChatScreen/>
  );
}

function MapScreenRender() {
   return (
    <MapScreen/>
   );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenRender} />
        <Tab.Screen name="Chat Now" component={ChatScreenRender} />
        <Tab.Screen name="Map" component={MapScreenRender} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}