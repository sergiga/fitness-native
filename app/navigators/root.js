import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Exercises from '@pages/Exercises';
import Home from '@pages/Home';

const RootNavigator = createStackNavigator(
  {
    Exercises,
    Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default RootNavigator;
