import React from 'react';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import TodosList from '@/screens/TodosList';
import DayInfo from '../screens/DayInfo';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="DayInfo" component={DayInfo} />
      <Stack.Screen name="TodosList" component={TodosList} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
