//@flow
// Import StyleSheet so an StyleSheet can be created
import {
    StyleSheet,
} from 'react-native';

// Defining the StyleSheet with all styling
export default styles = StyleSheet.create({
    container       : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#FFFFFF',
    },
    buttonStyle     : {
        height          : 80,
        width           : 200,
        margin          : 10,
        justifyContent  : 'center',
        borderRadius    : 5,
        alignItems      : 'center',
        backgroundColor : '#448AFF',
    },
    buttonTextStyle : {
        fontSize        : 20,
        color           : '#FFFFFF',
    },
    userInput       : {
        width           : 200,
        height          : 80,
        fontSize        : 20,
    },
    userText        : {
        fontSize        : 20,
        color           : '#000000',
    }
});