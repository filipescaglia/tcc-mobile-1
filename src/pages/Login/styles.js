import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    error: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10
    },

    form: {
        width: '100%',
    },

    formDescription: {
        fontSize: 22,
        color: '#737380',
        marginBottom: 20,
    },

    input: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderWidth: 0.3,
        borderRadius: 8,
        marginBottom: 25,
        fontSize: 20,
        backgroundColor: '#FFF'
    },

    loginButton: {
        height: 55,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A8E8'
    },

    loginButtonText: {
        color: '#FFF',
        fontSize: 22,
    },

    registerButton:  {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    registerTextButton: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#00A8E8'
    }

});

export default styles;