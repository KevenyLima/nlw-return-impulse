import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageProps, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
interface props extends Partial<TouchableOpacityProps> {
  title: string
  image: ImageProps
}
export function Option({ image, title , ...rest }:props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <Image source={image} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}