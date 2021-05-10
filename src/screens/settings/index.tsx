import { useLinkTo } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonStyles } from '../../theme/styles';

interface SettingsProps {}

const Settings = (props: SettingsProps) => {
    const linkTo = useLinkTo();
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Settings</Text>
      <TouchableOpacity onPress={()=> linkTo('/Home')}>
          <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  text:{
      fontSize: 20,
      ...CommonStyles.baseFont_SemiBold
  }
});
