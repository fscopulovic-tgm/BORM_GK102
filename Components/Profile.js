//@flow
import React, { Component } from 'react';
// Some React Native components
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

// Importing the StyleSheet
import styles from '../Styles/Styles.js';

// Import Actions for navigation
import { Actions } from 'react-native-router-flux';

// The properties are empty
type Props = {
    username : string,
}

// Class of the Profile component
export default class Profile extends React.Component<Props> {

    /*
    * Constructor of the Component
    * It calls the constructor of the super class with the property as the parameter
    */
    constructor(props : Props) {
        super(props);
    }
    
    // Returns the component
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.userText}
                >
                    Hello {this.props.username}!
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => 
                        Actions.popTo('home')
                    }
                >
                    <Text
                        style={styles.buttonTextStyle}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};