import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomePage from '@components/HomePage';

const HomeNavigator = createStackNavigator(
  {
    HomePage
  },
  {
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default HomeNavigator;
