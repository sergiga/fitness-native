import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@store/sagas';
import workouts from '@store/workouts/reducers';

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  workouts
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
