import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppTabs from '../components/appTabs'

const MapScreen = props => {
    return(
        <View style={styles.MapScreen}>
            <View>
                <Text style={styles.textHeading}>Map</Text>
            </View>
            {/* <View style={styles.buttonContainer}>
                <AppTabs/>
            </View> */}
        </View>     
)};

const styles = StyleSheet.create({
    MapScreen: {
        padding: 30,
        flex: 1,
    },
    textHeading: {
        fontSize: 30,
        paddingVertical: 30,
    },
    buttonContainer: {
        flex:1,
        justifyContent: 'flex-end',        
    },
});

export default MapScreen;