import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';

function HomePage() {
  const navigateToExercises = () => {
    console.log('navigate')
  }

  return (
    <View style={styles.page}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
      />
      <View style={styles.menu}>
        <TouchableWithoutFeedback onPress={navigateToExercises}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Text style={styles.text}>Exercises</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 64,
    margin: 24
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#3F4149',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 24
  }
});

export default HomePage;
