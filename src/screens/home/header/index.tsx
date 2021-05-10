import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles';

const Header = () => {
  return (
    <View style={styles.header_container}>
      <View style={styles.greetingPanel}>
        <Text style={styles.greeting} >Hello,</Text>
        <Text style={styles.userName}>Adbur Rahman</Text>
      </View>
      <View style={{ flex: 2, alignItems:'flex-end'}}> 
        <Image
          style={styles.userImage} 
          resizeMode='contain'
          source={require('../../../asserts/images/user.jpg')}
        />
      </View>
    </View>
  );
};

export default Header;