import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import { colors } from "@/styles";

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
        cursorColor={colors.secondary}
        selectionColor={colors.secondary}
        {...props}
      />
      {maxLength ? (
        <View style={s.footer}>
          <Text style={s.error}>{error}</Text>
          <Text style={s.counter}>{`${value?.length}/${maxLength}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    paddingBottom: 12,
    maxWidth: 320,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 54,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.main,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.text,
  },
  label: {
    marginBottom: 2,
    color: colors.text,
  },
  footer: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.text,
  },
  error: {

  },
  counter: {
    color: colors.text,
  },
});

export default SInput;
