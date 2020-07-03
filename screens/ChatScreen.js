import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppTabs from '../components/appTabs'

const ChatScreen = props => {
    return(
        <View style={styles.ChatScreen}>
            <View>
                <Text style={styles.textHeading}>Chat Now</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <View>
                    <TextInput 
                        style={styles.textInput} 
                        
                        //autoCapitalize = "characters" 
                        multiline
                        placeholder = "Hello.! I'm disaster resiliency assistent. I can answer about what disasters are. How can I help you?"></TextInput>
                </View>
                <View style={styles.button} >
                    <Text style={styles.buttonText}>Send</Text>
                </View>
            </TouchableOpacity>
            {/* <View>
                <AppTabs/>
            </View> */}
        </View>     
)};

const styles = StyleSheet.create({
    ChatScreen: {
        padding: 10,
        paddingHorizontal: 20,
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
    textInput: { 
        marginBottom: 3,
        height: 100, 
        borderColor: 'gray', 
        borderWidth: 1 ,
        borderRadius: 40,
        padding: 10,
        
    },
    button: {
        
        backgroundColor: Colors.primary,
        //paddingVertical: 12,
       // marginBottom: 10,
        borderRadius: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default ChatScreen;