import React, {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import SInput from '@/components/SInput';
import SButton from '@/components/SButton';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '@/store/todoReducer';

interface RootState {
  todos: any;
}

type Props = {
  navigation: any;
  route: any;
};

const DayInfo: React.FC<Props> = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const {dateString, timestamp} = route.params.data;
  const handleSubmit = () => {
    if (title.length < 4) {
      Alert.alert('Title must be at least 4 characters length');
      return;
    }
    if (description.length < 8) {
      Alert.alert('Description must be at least 4 characters length');
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        date: timestamp,
        dateString,
        title,
        description,
      }),
    );
    setTitle('');
    setDescription('');
  };
  return (
    <SafeAreaView>
      <ScrollView style={s.container}>
        <Text style={s.title}>{dateString}</Text>
        <SInput
          value={title}
          setValue={setTitle}
          label={'Title'}
          placeholder={'Enter todo title...'}
          maxLength={24}
        />
        <SInput
          value={description}
          setValue={setDescription}
          label={'Description'}
          placeholder={'Enter todo description...'}
          maxLength={256}
        />
        <SButton onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    padding: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 24,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
  },
});

export default DayInfo;
