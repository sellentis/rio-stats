import React from 'react';
import Home from '../screens/Home';
import UserInfo from '../screens/UserInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
