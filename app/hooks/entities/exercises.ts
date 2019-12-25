import * as React from 'react';
import ExerciseRepository from '@repos/exercise';
import { getCustomRepository } from 'typeorm';
import { useState, useEffect } from 'react';
import Exercise from '@entities/exercise';


export function useExerciseList(): [boolean, Array<Exercise>, () => Promise<void>] {
  const [refreshing, setRefreshing] = useState(true);
  const [exercises, setExercises] = useState<Array<Exercise>>([]);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = async () => {
    setRefreshing(true)
    const manager = getCustomRepository(ExerciseRepository);
    const data = await manager.getRemoteExercises();
    setRefreshing(false)
    setExercises(data);
  };

  return [refreshing, exercises, reloadData];
};
