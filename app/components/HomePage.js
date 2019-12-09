import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function HomePage() {
  return (
    <View style={styles.page}>
      <View style={styles.calendar}>
        <Text>CALENDAR</Text>
      </View>
      <View style={styles.menu}>
        <Text>MENU</Text>
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
    flexGrow: 1,
    backgroundColor: 'white',
  },
  menu: {
    flexShrink: 0,
    height: 400,
    backgroundColor: '#DFE2E9',
  }
});

export default HomePage;
