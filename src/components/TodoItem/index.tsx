import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo} from '@/store/todoReducer';
import {Todo} from '@/interfaces';
import {colors} from '@/styles';
import {dateFormat} from '@/helpers';
import {ReactNativeModal} from 'react-native-modal';
import ConfirmModal from '@/components/modals/ConfirmModal';
import EditTodoModal from '@/components/modals/EditTodoModal';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

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
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleEditTodo}
        style={[s.backBtn, s.backBtnEdit]}>
        <Animated.Text
          style={[
            s.backBtnText,
            // {
            //   transform: [{translateX: trans}],
            // },
          ]}>
          Edit
        </Animated.Text>
      </TouchableOpacity>
    );
  };
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1],
    });
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={setIsDelete.bind(null, true)}
        style={[s.backBtn, s.backBtnDelete]}>
        <Animated.Text
          style={[
            s.backBtnText,
            // {
            //   transform: [{translateX: trans}],
            // },
          ]}>
          Delete
        </Animated.Text>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable
      overshootLeft={false}
      overshootRight={false}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}>
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
          <Text style={s.date}>
            {new Date(date).toLocaleString(undefined, dateFormat)}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

const s = StyleSheet.create({
  wrapper: {
    padding: 12,
    width: '100%',
    backgroundColor: '#fff',
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
  btn: {
    fontSize: 16,
    color: colors.text,
  },
  backBtn: {
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnDelete: {
    backgroundColor: colors.error,
  },
  backBtnEdit: {
    backgroundColor: colors.main,
  },
  backBtnText: {
    fontWeight: '900',
    color: '#fff',
  },
  date: {
    fontSize: 16,
    color: colors.text,
  },
});

export default TodoItem;
