import React from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import success from '../../assets/success.png'
import { Button } from '../Button';
import { Copyright } from '../Copyright';
import { styles } from './styles';
interface props{
  onSendAnotherFeedback:()=>void
}
export function Success({onSendAnotherFeedback}: props) {
  return (
    <View style={styles.container} >
      <Image source={success} style={styles.image}/>
      <Text style={styles.title}>
        Agradecemos o feedback!
      </Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright/>
    </View>
  )
}