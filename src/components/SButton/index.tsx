import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  text?: string;
  onPress?: any;
};

const SButton: React.FC<Props> = ({text = 'submit', onPress, ...props}) => {
  return (
    <TouchableOpacity style={[styles.button]} {...props} onPress={onPress}>
      <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default SButton;
