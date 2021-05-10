import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CategoryProps } from './types';
import { styles } from './styles';

const Card = ({ title, isSelected, id, onPress }: CategoryProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, isSelected && styles.selected]}
            key={id}>
            <Text style={[styles.title, isSelected && styles.selectedTitle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Card;