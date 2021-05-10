import { StyleSheet } from "react-native";
import {purple} from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        margin: 5, 
        padding: 10,
        borderRadius: 10,
        minWidth: 100,
        alignItems: 'center',
        backgroundColor: '#F7F8FA'
    },
    selected:{
        backgroundColor: purple,
    },
    title:{
        color: 'black'
    },
    selectedTitle:{
        color: 'white'
    }
})