import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigation/BottomTabNavigator';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import SettingsScreen from './app/screens/SettingsScreen';
import Button from './app/components/Button';
import CoverCard from './app/components/CoverCard';
import GenreCard from './app/components/GenreCard';
import loadAssetsAsync from './app/constants/cache';



export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync.loadAssetsAsync}
        onFinish={() => {
          setIsReady(true)}}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
