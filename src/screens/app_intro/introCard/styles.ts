import { StyleSheet } from "react-native";
import { CommonStyles } from "../../../theme/styles";

export const styles = StyleSheet.create({ 
    container: { 
        justifyContent:'center',
        alignItems: 'center',
    }, 
    introContainer: {
        flex: 7, 
        backgroundColor: 'white',
    },
    loginContainer: {
        flex: 4
    },
    title: {
        fontSize: 20, color: 'black', 
        ...CommonStyles.baseFont_SemiBold
    },
    text: {
        color:'#9391A1',
        textAlign: 'center',
        padding: 10,
        ...CommonStyles.baseFont_Lite
    }
})