import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type Props = {
  text?: string;
};

const SInput: React.FC<Props> = ({text, ...props}) => {
  const [value, setValue] = useState(text || '');
  return (
    <View>
      <TextInput
        value={value}
        underlineColorAndroid="transparent"
        placeholderTextColor="#ABAAAA"
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        style={[styles.input]}
        onChangeText={t => setValue(t)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    minHeight: 40,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default SInput;
