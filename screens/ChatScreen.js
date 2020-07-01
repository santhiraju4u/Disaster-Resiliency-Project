import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppTabs from '../components/appTabs'

const ChatScreen = props => {
    return(
        <View style={styles.ChatScreen}>
            <View>
                <Text style={styles.textHeading}>Chat Now</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button} >
                    <Text style={styles.buttonText}>Send</Text>
                </View>
            </View>
            <View>
                <AppTabs/>
            </View>
        </View>     
)};

const styles = StyleSheet.create({
    ChatScreen: {
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
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        marginBottom: 36,
        borderRadius: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default ChatScreen;