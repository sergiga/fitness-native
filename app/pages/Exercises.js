import * as React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useExerciseList } from '@hooks/entities/exercises';
import RText from '@components/RText';

function Exercises() {
  const [refreshing, exercises, reloadData] = useExerciseList();
  const exerciseItems = exercises.map(exercise => 
    <RText
      key={exercise.id}
    >
      {exercise.name}
    </RText>
  );

  return (
    <View style={styles.page}>
      <RText
        style={styles.header}
        scale={'h4'}
      >
        EXERCISES
      </RText>
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
  header: {
    margin: 24,
    textAlign: 'center'
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
