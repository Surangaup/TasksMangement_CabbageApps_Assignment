import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ListEmptyComponentProps {
    message: string
}

const ListEmptyComponent = ({message}: ListEmptyComponentProps) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center', 
      alignItems: 'center'
  }
});
