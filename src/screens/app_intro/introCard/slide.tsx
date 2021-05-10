import * as React from 'react';
import { Text, View, Image, ListRenderItemInfo } from 'react-native';
import { styles } from './styles';
import { SlideProps } from './types';

export const Slide = ({item}: ListRenderItemInfo<SlideProps>) => {
  console.log(item);
  
  return (
    <View style={styles.container} >
      <Image source={item.image}
        style={{ height: 240, width: 204 }}
        resizeMode='cover'
        resizeMethod='resize' />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
}