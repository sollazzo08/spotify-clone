import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeNavigator() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack>
      <HomeStack.Screen />
      <HomeStack.Screen />
    </HomeStack>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeNavigator;
