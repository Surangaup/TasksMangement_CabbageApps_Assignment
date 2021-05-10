import * as React from 'react';
import { Text, Image } from 'react-native';
import { LoginButtonProps } from './types';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = (props: LoginButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button_container, props.hasBackgroundColor ? styles.backgroundColor : styles.border]}>
            <Image style={styles.image} height={20} width={20} source={props.image} />
            <Text style={styles.title} >{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;