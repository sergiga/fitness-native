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
    <View key={number.toString()} style={styles.listItemContainer}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemSubtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listItemTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  listItemSubtitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default WorkoutListItem;
