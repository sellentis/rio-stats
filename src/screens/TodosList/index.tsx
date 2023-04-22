import React from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from '@/components/TodoItem';

type Props = {
  navigation: any;
};
interface RootState {
  todos: any;
}

const TodosList: React.FC<Props> = ({navigation}) => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {todos.length ? (
          todos.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))
        ) : (
          <Text>No todos</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
  },
});

export default TodosList;
