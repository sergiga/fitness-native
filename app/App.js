import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import HomeNavigator from '@navigators/HomeNavigator';

const AppContainer = createAppContainer(HomeNavigator);

const App: () => React$Node = () => {
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
