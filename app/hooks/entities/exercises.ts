import * as React from 'react';
import { useState, useEffect } from 'react';
import { Exercise } from '@entities/exercise';
import { ExerciseManager } from '@managers/exercise';


export function useExerciseList(): [boolean, Array<Exercise>, () => Promise<void>] {
  const [refreshing, setRefreshing] = useState(true);
  const [exercises, setExercises] = useState<Array<Exercise>>([]);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = async () => {
    setRefreshing(true)
    const data = await ExerciseManager.manager.getRemotes();
    setRefreshing(false)
    setExercises(data);
  };

  return [refreshing, exercises, reloadData];
};
