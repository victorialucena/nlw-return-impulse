import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png'
import { Copyrigth } from '../Copyrigth';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback } : Props) {
  return (
    <View style={styles.container}>
          <Image
              source={successImg}
              style={styles.image}
          />
          <Text
            style={styles.title}
          >
             Agradecemos o Feedback
          </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
              <Text style={styles.buttonTitle}>
                Quero enviar outro feedback!
              </Text>
          </TouchableOpacity>
          <Copyrigth/>
    </View>
  );
}