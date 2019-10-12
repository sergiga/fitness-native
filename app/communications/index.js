import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const WORKOUTS_URL = '/workouts/';

export function getWorkouts() {
  return axios.get(WORKOUTS_URL);
};
