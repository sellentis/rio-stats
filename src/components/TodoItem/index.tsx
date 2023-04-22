import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/store/todoReducer";

type Props = {
  id?: string;
  title?: string;
  description?: string;
  date?: string;
};

const TodoItem: React.FC<Props> = ({
  id,
  title,
  description,
  date,
}) => {
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo({id}));
  };
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.description}>{description}</Text>
      <View style={s.footer}>
        <View style={s.footerNav}>
          <View>
            <Text>Edit</Text>
          </View>
          <TouchableHighlight onPress={handleRemoveTodo.bind(null)}><Text>Delete</Text></TouchableHighlight>
        </View>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    paddingBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    width: '100%',
    marginBottom: 4,
    padding: 4,
  },
  title: {

  },
  description: {

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
});

export default TodoItem;
