import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import WorkoutListItem from '@components/WorkoutListItem';

function WorkoutList() {
  const [workoutCount, setWorkouts] = useState(0)

  const workoutList = Array(workoutCount).fill().map((workout, number) => {
    const title = `Workout ${number}`;
    const subtitle = 'Lo que diga fifo';
    return (
      <WorkoutListItem
        title={title}
        subtitle={subtitle} />
    )
  })

  return (
    <SafeAreaView>
      <Button
        title="Add workout"
        color="#f194ff"
        onPress={() => setWorkouts(workoutCount + 1)}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          { workoutList }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default WorkoutList;
