import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },

    inputContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor: '#999',
        borderWidth: 0.4,
        borderRadius: 20,
        marginBottom: 20,
    },

    searchInput: {
        flex: 1,
        paddingVertical: 15,
        fontSize: 18,
        color: '#999'
    },

    camera: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    cameraStatus: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#FFF',
        backgroundColor: 'green',
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },

    cameraThumb: {
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    cameraInfo: {
        paddingTop: 15,
        paddingHorizontal: 15
    },

    propertyTitle: {
        fontSize: 12,
        color: '#41414B',
        fontWeight: 'bold',
    },

    propertyValue: {
        marginTop: 3,
        fontSize: 14,
        color: '#737380'
    },

    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        backgroundColor: '#00A8E8',
    }
});

export default styles;