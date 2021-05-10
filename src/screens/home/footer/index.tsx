import { useLinkTo } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dark_red, line_red, purple } from '../../../theme/colors';
import {CommonStyles} from '../../../theme/styles'; 

export interface FooterProps { 
  openPanel: any,
}

const Footer = (props: FooterProps) => {
  const linkTo = useLinkTo()
  return (
    <React.Fragment>     
      <View style={styles.container}>
        <Ionicons size={30} name='home-outline' color={purple} />
        <TouchableOpacity onPress={props.openPanel} style={[styles.plusButton, CommonStyles.shadow]}>
          <Ionicons color='white' size={30} name='add' />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> linkTo('/Settings')}>
          <Ionicons size={30} name='settings-outline' />
        </TouchableOpacity>
        
      </View>
    </React.Fragment>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingBottom: 20
  },
  plusButton: {
    height: 50, width: 50,
    backgroundColor: 'rgba(250,76,92, .5)',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 15,

  }
});
