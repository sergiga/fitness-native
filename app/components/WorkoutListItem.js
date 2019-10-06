import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function WorkoutListItem(props) {
  const { title, subtitle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default WorkoutListItem;
