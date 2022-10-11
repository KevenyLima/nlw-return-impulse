import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View >
      <Text style={styles.text}>
          Feito com ♥ por{' '}
          <a
            className="underline underline-offset-2"
            href="https://github.com/KevenyLima/"
            target="_blank"
            rel="noopener noreferrer"
          >
              Keveny Lima
          </a>
    </Text>
</View>
  )
}