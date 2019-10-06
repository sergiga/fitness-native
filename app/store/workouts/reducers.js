import {
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
} from '@store/types';

function workouts(state = {
  error: {},
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case FETCH_WORKOUTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_WORKOUTS_SUCCESS:
      return {
        ...state,
        items: action.workouts,
        isFetching: false
      };
    case FETCH_WORKOUTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default workouts;
