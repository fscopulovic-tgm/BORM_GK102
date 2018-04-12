//@flow
import React, { Component } from 'react';
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
* It contains an username, an email, a password and a second password
*/
type State = {
    username        : string,
    email           : string,
    password        : string,
    second_password : string,
}

// Class of the Register component
export default class Register extends React.Component<Props, State> {
    
    /*
    * Constructor of the Component
    * It calls the constructor of the super class with the property as the parameter
    * Then it sets the state
    */
    constructor(props : Props) {
        super(props);
        this.state = {
            username        : '',
            email           : '',
            password        : '',
            second_password : '',
        }
    }

    /*
    * This async method makes the request to the register api
    * It returns the success boolean from the json object
    */
    async makeRegisterRequest() : void {
        try {
            let response = await fetch('https://infinite-tor-82791.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username    : this.state.username,
                    mail        : this.state.email,
                    pw          : this.state.password,
                }),
            });
            let responseJson = await response.json();
            
            this.checkResponse(responseJson.success)
        } catch (error) {
            console.error(error);
        }
    }

    checkResponse() : void {
        if(this.state.password === this.state.second_password) {
            if (this.makeRegisterRequest()) {
                // Navigates to the Profile Page of the application
                Actions.profile({username : this.state.username})
            } else {
                Alert.alert(
                    'Something went wrong',
                    'Either the username exists or you did not fill one or more text inputs.',
                    [
                        {text: 'Ok', onPress: () => Actions.refresh()}
                    ],
                )
            }
        } else {
            // If the two passwords are not correct it will print out a wrong message
            Alert.alert(
                'Something went wrong',
                'Please check your password or your second password.',
                [
                    {text: 'Ok'}
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
                    onChangeText={(text) => this.setState({email : text})}
                    value={this.state.email}
                    placeholder="E-Mail"
                />
                <TextInput
                    style={styles.userInput}
                    onChangeText={(text) => this.setState({password : text})}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.userInput}
                    onChangeText={(text) => this.setState({second_password : text})}
                    value={this.state.second_password}
                    placeholder="Confirm password"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.makeRegisterRequest.bind(this)}
                >
                    <Text
                        style={styles.buttonTextStyle}
                    >
                        Register
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