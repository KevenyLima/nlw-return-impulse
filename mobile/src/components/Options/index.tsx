import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';
import { styles } from './styles';
interface props {
  onFeedbackTypeChanged: (feedbackType:FeedbackType) => void
}
export function Options({onFeedbackTypeChanged}: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe o seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key,feedbackType])=>(
          <Option key={key} title={feedbackType.title} image={feedbackType.image} onPress={()=>onFeedbackTypeChanged(key as FeedbackType)} />
        ))}
      </View>
     <Copyright />
    </View>
  )
}