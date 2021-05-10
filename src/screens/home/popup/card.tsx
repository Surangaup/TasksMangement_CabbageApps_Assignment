import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CardProps } from './types';
import { styles } from './styles';

const Card = ({ title, icon, onPress }: CardProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container]} >
                <Ionicons style={styles.icon} name={icon} />
            <Text style={[styles.title]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Card;