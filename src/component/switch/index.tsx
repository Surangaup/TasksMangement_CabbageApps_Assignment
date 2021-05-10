import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface SwitchProps {
    onText:string,
    offText: string,
}

const Switch = ({onText, offText}: SwitchProps) => {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity style={[styles.container, isEnabled ? styles.onContainer : styles.offContainer]} onPress={toggleSwitch}>
      <Text style={isEnabled? styles.onText : styles.offText}>{isEnabled? onText : offText}</Text>
      <View style={[styles.line, isEnabled? styles.onLine : styles.offLine]} />
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      width: 55,
      borderRadius: 10,
      paddingHorizontal: 10, paddingVertical: 5,
  },
  onContainer:{
      backgroundColor: '#5A3EA4',
  },
  offContainer:{
      backgroundColor: '#F7F8FA',
  },
  onText:{
      color: 'white'
  },
  offText:{
      color: 'black'
  },
  line:{
      borderRightWidth: 1, 
  },
  onLine:{
    borderColor: 'white',
  },
  offLine:{
    borderColor: 'black',
  }
});
