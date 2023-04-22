import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

type Props = {
  value?: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  setValue?: any;
  error?: string;
};

const SInput: React.FC<Props> = ({
  value,
  label,
  maxLength,
  placeholder,
  setValue,
  error,
  ...props
}) => {
  return (
    <View style={s.wrapper}>
      {label ? <Text style={s.label}>{label}</Text> : null}
      <TextInput
        value={value}
        underlineColorAndroid="transparent"
        placeholderTextColor="#ABAAAA"
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        style={[s.input]}
        onChangeText={t => setValue(t)}
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
      />
      {maxLength ? (
        <View style={s.counter}>
          <Text>{error}</Text>
          <Text>{`${value?.length}/${maxLength}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    paddingBottom: 12,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 14,
  },
  label: {
    marginBottom: 2,
  },
  counter: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SInput;
