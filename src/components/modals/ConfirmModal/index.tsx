import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SButton from '@/components/SButton';
import {colors} from '@/styles';
import {IConfirmModal} from '@/interfaces';

const ConfirmModal: React.FC<IConfirmModal> = ({confirm, cancel}) => {
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>Are u sure?</Text>
      <View>
        <SButton text="Yes" onPress={confirm} customStyles={s.btn} />
        <SButton text="Cancel" onPress={cancel} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.mainBg,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: colors.secondary,
    textAlign: 'center',
  },
  btn: {
    marginBottom: 8,
  },
});

export default ConfirmModal;
