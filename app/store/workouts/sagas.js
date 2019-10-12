import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_WORKOUTS,
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
} from '@store/types';
import { getWorkouts } from '@api/index';

function* fetchWorkouts() {
  yield put({ type: FETCH_WORKOUTS_REQUEST })
  try {
    const workouts = yield call(getWorkouts);
    yield put({ type: FETCH_WORKOUTS_SUCCESS, workouts: workouts.data })
  } catch (error) {
    console.warn(error)
    yield put({ type: FETCH_WORKOUTS_FAILURE, error })
  }
};

function* watcher() {
  yield takeLatest(FETCH_WORKOUTS, fetchWorkouts)
};

export default watcher;
