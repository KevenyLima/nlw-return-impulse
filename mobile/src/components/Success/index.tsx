import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
interface props{
  onSendAnotherFeedback:()=>void
}
export function Success({onSendAnotherFeedback}: props) {
  return (
    <View >
      <Text>Hello World</Text>
    </View>
  )
}