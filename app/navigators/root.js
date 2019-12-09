import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home';
import Exercises from '@pages/Exercises';

const RootNavigator = createStackNavigator(
  {
    Home,
    Exercises
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default RootNavigator;
