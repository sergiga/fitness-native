import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import MenuButton from '@components/MenuButton';

function Home(props) {
  const navigateToExercises = () => {
    props.navigation.navigate('Exercises')
  }

  return (
    <View style={styles.page}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        theme={{
          selectedDayBackgroundColor: '#3D12DA',
          selectedDayTextColor: '#FFFFFF',
          todayTextColor: '#3D12DA',
          dayTextColor: '#3F4149',
          dotColor: '#3D12DA',
          selectedDotColor: '#FFFFFF',
          indicatorColor: '#3D12DA',
          textDayFontFamily: 'Rubik-Regular',
          textMonthFontFamily: 'Rubik-Regular',
          textDayHeaderFontFamily: 'Rubik-Regular',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
      <View style={styles.menu}>
        <MenuButton onPress={navigateToExercises}>
          Exercises
        </MenuButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  calendar: {
    flexShrink: 0,
    backgroundColor: 'white',
  },
  menu: {
    flexGrow: 1,
    backgroundColor: '#e4e4e4',
  }
});

export default Home;
