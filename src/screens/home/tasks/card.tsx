import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Task } from './types';
import { styles } from './styles';
import { gray, purple } from '../../../theme/colors';


const Card = ({ id, title, description, fromTime, toTime, isCompleted, taskType, onCheckChange }: Task) => {
    return (
        <View style={styles.container}>
            <View style={styles.detailsPanel}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.title, isCompleted && styles.completed]}>{title}</Text>
                    <View style={[styles.taskType, taskType === 'I' ? styles.important : styles.planned]} />
                    {/* <Text style={styles.title}>{taskType}</Text> */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons size={20} color={'#736F81'} name='alarm-outline' />
                    <Text style={styles.time}>{`${fromTime}-${toTime}`}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    onCheckChange(id, !isCompleted)
                }}
                style={styles.checkBox}>
                {
                    isCompleted ? <FontAwesome size={30} color={purple} name='check-circle' />
                        : <FontAwesome5 size={30} color='gray' name='check-circle' />
                }
            </TouchableOpacity>
        </View>
    );
};

export default Card;