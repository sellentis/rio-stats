import React, {useState} from 'react';
import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import SInput from '@/components/SInput';
import SButton from '@/components/SButton';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, clearTodos } from "@/store/todoReducer";

type Props = {
  navigation: any;
};
interface RootState {
  todos: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const handleSubmit = () => {
    if (title.length < 4) {
      Alert.alert('Title must be at least 4 characters length');
      return;
    }
    if (description.length < 8) {
      Alert.alert('Description must be at least 4 characters length');
      return;
    }
    dispatch(addTodo({id: Date.now(), date: '123', title, description}));
    setTitle('');
    setDescription('');
  };
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.formContainer]}>
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
        </View>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('TodosList');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Home;
