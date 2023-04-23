import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '@/styles';

type Props = {
  text?: string;
  onPress?: any;
  customStyles?: any;
};

const SButton: React.FC<Props> = ({
  text = 'submit',
  onPress,
  customStyles,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      {...props}
      onPress={onPress}>
      <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    maxWidth: 320,
    marginHorizontal: 'auto',
    alignSelf: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    textTransform: 'uppercase',
  },
});

export default SButton;
