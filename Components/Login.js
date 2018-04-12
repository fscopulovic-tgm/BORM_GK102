//@flow
import React, { Component } from 'react';
// Some React Native components
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

// Importing the StyleSheet
import styles from '../Styles/Styles.js';

// Import Actions for navigation
import { Actions } from 'react-native-router-flux';

// The properties are empty
type Props = {}

/*
* State of the current component
* It contains an username and a password
*/
type State = {
    username    : string,
    password    : string,
}

// Class of the Login component
export default class Login extends React.Component<Props, State> {

    /*
    * Constructor of the Component
    * It calls the constructor of the super class with the property as the parameter
    * Then it sets the state
    */
    constructor(props : Props) {
        super(props);
        this.state = {
            username    : '',
            password    : '',
        }
    }

    /* 
    * async method to make a request
    * It makes the response of the POST rest api call
    * After this it gets a json object and it returns the success boolean from the response
    */
    async makeLoginRequest() : void {
        try {
            let response = await fetch('https://infinite-tor-82791.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    pw: this.state.password,
                }),
            });
            let responseJson = await response.json();
            
            this.checkResponse(responseJson.success);
        } catch (error) {
            console.error(error);
        }
    }

    /*
    * If the response made with the method makeLoginRequest is true
    * It will open the welcome page
    * Otherwise it will make an alert for the user and refresh the page
    */
    checkResponse(success : boolean) : void {
        if (success) {
            // Navigates to the Profile Page of the application
            Actions.profile({username : this.state.username})
        } else {
            Alert.alert(
                'Something went wrong',
                'Username or password is wrong.',
                [
                    {text: 'Ok', onPress: () => Actions.refresh()}
                ],
            )
        }
    }
    
    // Returns the component
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.userInput}
                    onChangeText={(text) => this.setState({username : text})}
                    value={this.state.username}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.userInput}
                    onChangeText={(text) => this.setState({password : text})}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.makeLoginRequest.bind(this)}
                >
                    <Text
                        style={styles.buttonTextStyle}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => 
                        Actions.pop()
                    }
                >
                    <Text
                        style={styles.buttonTextStyle}
                    >
                        Back to Home
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};