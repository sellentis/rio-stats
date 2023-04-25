import React, {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '@/styles';
import {Calendar} from 'react-native-calendars/src';
import SButton from "@/components/SButton";
import { useSelector } from "react-redux";
import { Todo } from "@/interfaces";

type Props = {
  navigation: any;
};
interface RootState {
  todos: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const todos = useSelector((state: RootState) => state.todos);
  let formattedDates = {};
  todos.forEach(todo => {
    formattedDates[todo.dateString] = {selected: true}
  });
  console.log(formattedDates);
  const handlePickDay = (dateString, timestamp) => {
    navigation.navigate('DayInfo', {data: {dateString, timestamp}});
  };
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.formContainer]}>
          <Calendar
            onDayPress={day => {
              handlePickDay(day.dateString, day.timestamp);
            }}
            theme={{
              selectedDayBackgroundColor: colors.main,
              selectedDayTextColor: '#ffffff',
              todayTextColor: colors.main,
            }}
            markedDates={formattedDates}
          />
          <SButton
            onPress={() => {
              navigation.navigate('TodosList');
            }}
            text={'View list'}
            customStyles={styles.btn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: Dimensions.get('window').height,
    backgroundColor: colors.mainBg,
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
  btn: {
    marginTop: 24,
  },
});

export default Home;
