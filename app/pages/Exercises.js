import * as React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useExerciseList } from '@hooks/entities/exercises';


function Exercises() {
  const [refreshing, exercises, reloadData] = useExerciseList();
  const exerciseItems = exercises.map(exercise => 
    <Text key={exercise.id}>{exercise.name}</Text>
  );

  return (
    <View style={styles.page}>
      <Text>Exercises</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={reloadData} />
        }
        >
        {exerciseItems}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flexBasis: 1,
  },
  empty: {
    flexBasis: 1,
    marginTop: 64,
    textAlign: "center",
  }
});

export default Exercises;
