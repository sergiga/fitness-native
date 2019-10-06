import { all } from 'redux-saga/effects';
import workoutSaga from '@store/workouts/sagas';

export default function* rootSaga() {
  yield all([
    workoutSaga()
  ]);
};
