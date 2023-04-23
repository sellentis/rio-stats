import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import SButton from '@/components/SButton';
import {colors} from '@/styles';
import { IConfirmModal, IEditTodoModal } from "@/interfaces";
import SInput from '@/components/SInput';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, editTodo } from "@/store/todoReducer";

interface RootState {
  todos: any;
}

const EditTodoModal: React.FC<IEditTodoModal> = ({
  confirm,
  cancel,
  id,
  title,
  description,
}) => {
  const [titleText, setTitleText] = useState(title || '');
  const [descriptionText, setDescriptionText] = useState(description || '');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (titleText.length < 4) {
      Alert.alert('Title must be at least 4 characters length');
      return;
    }
    if (descriptionText.length < 8) {
      Alert.alert('Description must be at least 4 characters length');
      return;
    }
    confirm ? confirm() : null;
    dispatch(editTodo({id, title: titleText, description: descriptionText}));
    setTitleText('');
    setDescriptionText('');
    cancel();
  };
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>Edit item</Text>
      <View>
        <SInput
          value={titleText}
          setValue={setTitleText}
          label={'Title'}
          placeholder={'Enter todo title...'}
          maxLength={24}
        />
        <SInput
          value={descriptionText}
          setValue={setDescriptionText}
          label={'Description'}
          placeholder={'Enter todo description...'}
          maxLength={256}
        />
      </View>
      <View>
        <SButton text="Yes" onPress={handleSubmit} customStyles={s.btn} />
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

export default EditTodoModal;
