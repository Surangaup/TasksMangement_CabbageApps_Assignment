import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { CommonStyles } from '../../theme/styles';

interface ButtonProps {
    title: string,
    onPress: any
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity testID='custom-btn' style={[styles.container]} onPress={()=> onPress()}>
        <Text style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FD93A1',
    alignItems:'center', justifyContent: 'center',
    position:'absolute',
    minHeight: 50,
    borderRadius: 10,
    elevation: 9,
    shadowOpacity: .2,
    width: '100%',
    alignSelf: 'center',
    bottom: '5%'
  },
  text:{
      color: 'white'
  }
});
