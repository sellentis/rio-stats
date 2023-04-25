import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from '@/components/TodoItem';
import {colors} from '@/styles';

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
      <View style={s.container}>
        <View style={s.listContainer}>
          <FlatList
            style={s.list}
            data={todos}
            renderItem={({item}) => (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            )}
            ItemSeparatorComponent={() => <View style={[s.listSeparator]} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: colors.mainBg,
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
  },
  listContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.main,
  },
  list: {
    width: '100%',
  },
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.main,
  },
});

export default TodosList;
