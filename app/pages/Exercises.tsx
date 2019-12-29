import _ from 'lodash';
import * as React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import RText, { RTextStyles } from '@components/RText';
import { useExerciseList } from '@hooks/entities/exercises';
import { Exercise } from '@entities/exercise';

function renderExercises(exercises: Exercise[]) {
  return exercises.map(exercise =>
    <View key={exercise.id}>
      <RText type={RTextStyles.subtitle1}>{exercise.name}</RText>
      <View>
        {renderMusclesFor(exercise)}
      </View>
    </View>
  );
}

function renderMusclesFor(exercise: Exercise) {
  return exercise.musclesInExercise
    .map(muscleInExercise => muscleInExercise.muscle)
    .map(muscle =>
      <View key={muscle.id}>
        <RText type={RTextStyles.body2}>{muscle.name}</RText>
      </View>
    );
}

export function Exercises() {
  const [refreshing, exercises, reloadData] = useExerciseList();
  return (
    <View style={styles.page}>
      <RText
        textStyle={styles.header}
        type={RTextStyles.h4}
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
        {renderExercises(exercises)}
      </ScrollView>
    </View>
  );
};

interface Styles {
  page: ViewStyle;
  header: ViewStyle;
  list: ViewStyle;
  empty: ViewStyle;  
}

const styles = StyleSheet.create<Styles>({
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
