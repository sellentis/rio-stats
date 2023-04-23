import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo} from '@/store/todoReducer';
import {Todo} from '@/interfaces';
import {colors} from '@/styles';
import {dateFormat} from '@/helpers';
import {ReactNativeModal} from 'react-native-modal';
import ConfirmModal from '@/components/modals/ConfirmModal';
import EditTodoModal from '@/components/modals/EditTodoModal';

const TodoItem: React.FC<Todo> = ({id, title, description, date}) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleRemoveTodo = () => {
    dispatch(removeTodo({id}));
  };
  const handleEditTodo = () => {
    setIsEdit(true);
  };
  return (
    <View style={s.wrapper}>
      <ReactNativeModal isVisible={isEdit}>
        <EditTodoModal
          id={id}
          title={title}
          description={description}
          cancel={setIsEdit.bind(null, false)}
        />
      </ReactNativeModal>
      <ReactNativeModal isVisible={isDelete}>
        <ConfirmModal
          confirm={handleRemoveTodo}
          cancel={setIsDelete.bind(null, false)}
        />
      </ReactNativeModal>
      <Text style={s.title}>{title}</Text>
      <Text style={s.description}>{description}</Text>
      <View style={s.footer}>
        <View style={s.footerNav}>
          <TouchableOpacity onPress={handleEditTodo.bind(null)}>
            <Text style={s.btn}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={setIsDelete.bind(null, true)}>
            <Text style={s.btn}>Delete</Text>
          </TouchableOpacity>
        </View>
        <Text style={s.date}>
          {new Date(date).toLocaleString(undefined, dateFormat)}
        </Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.main,
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  btn: {
    fontSize: 16,
    color: colors.text,
  },
  date: {
    fontSize: 16,
    color: colors.text,
  },
});

export default TodoItem;
