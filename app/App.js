import axios from 'axios';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { createConnection } from 'typeorm/browser';
import Exercise from '@entities/exercise';
import RootNavigator from '@navigators/root';

axios.defaults.baseURL = 'http://localhost:8000';

const AppContainer = createAppContainer(RootNavigator);

const App: () => React$Node = () => {
  createConnection({
    type: 'react-native',
    database: 'test',
    location: 'default',
    // logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [
      Exercise
    ]
  });

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
