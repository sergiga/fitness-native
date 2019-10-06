import {
  FETCH_WORKOUTS,
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
} from '@store/types';
import { call, put, takeLatest } from 'redux-saga/effects';

function fetchMock() {
  return new Promise(resolve => {
    resolve([
      {
        title: 'Workout 1',
        subtitle: 'Fuerza'
      },
      {
        title: 'Workout 2',
        subtitle: 'Agilidad'
      },
      {
        title: 'Workout 3',
        subtitle: 'Resistencia'
      },
    ])
  });
};

function* fetchWorkouts() {
  yield put({ type: FETCH_WORKOUTS_REQUEST })
  try {
    const workouts = yield call(fetchMock);
    yield put({ type: FETCH_WORKOUTS_SUCCESS, workouts })
  } catch (error) {
    yield put({ type: FETCH_WORKOUTS_FAILURE, error })
  }
};

function* watcher() {
  yield takeLatest(FETCH_WORKOUTS, fetchWorkouts)
};

export default watcher;
