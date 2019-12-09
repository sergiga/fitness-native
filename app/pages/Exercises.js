import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Exercises() {
  return (
    <View style={styles.page}>
      <Text>Exercises</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default Exercises;
