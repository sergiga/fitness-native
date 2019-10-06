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
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemSubtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  listItemSubtitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default WorkoutListItem;
