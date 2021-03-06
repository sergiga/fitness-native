import React from 'react';
import {
  RefreshControl,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_WORKOUTS } from '@store/types';
import WorkoutListItem from '@components/WorkoutListItem';

function WorkoutList() {
  const dispatch = useDispatch()
  const refreshing = useSelector(state => state.workouts.isFetching);
  const workouts = useSelector(state => state.workouts.items);

  const WorkoutListItems = () => {
    if (workouts.length === 0) {
      return (
        <Text style={styles.empty}>
          No Workouts
        </Text>
      )
    }
    return workouts.map(workout => {
      return (
        <WorkoutListItem
          key={workout.id}
          {...workout} />
      )
    })
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => dispatch({ type: FETCH_WORKOUTS })} />
        }
        >
        <View>
          <WorkoutListItems />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexBasis: 1,
  },
  empty: {
    flexBasis: 1,
    marginTop: 64,
    textAlign: "center",
  }
});

export default WorkoutList;
