import { StyleSheet } from "react-native";
import {dark_gray, purple} from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        // height: '100%',
        flexDirection: 'row',
        margin: 10, padding: 15,
        borderRadius: 15,
        backgroundColor: '#F7F8FA'
    },
    groupTitle:{

    },
    detailsPanel: {
        flex: 9
    },
    checkBox: {
        flex: 1,
        justifyContent:'center', alignItems:'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20
    },
    taskType:{
        height: 7, width: 7,
        borderRadius: 250,
        marginLeft: 5
    },
    important:{
        backgroundColor: 'orange'
    },
    planned:{
        backgroundColor: purple
    },
    time:{
        color: '#736F81'
    },
    description:{
        color: '#736F81',
        marginTop: 5
    },
    completed:{
        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    }
});