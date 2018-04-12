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

// Class that needs to be imported for the navigation
import { Actions } from 'react-native-router-flux';

// Class of the Home component, no constructor is needed
export default class Home extends React.Component<{}> {
    
    // Returns the component
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => 
                        Actions.login()
                    }
                >
                    <Text style={styles.buttonTextStyle}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => 
                        Actions.register()
                    }
                >
                    <Text style={styles.buttonTextStyle}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};