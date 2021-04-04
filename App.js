import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './app/navigation/BottomTabNavigator';
import ListItem from './app/components/ListItem'
import Screen from './app/components/Screen'

export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator/>
    // </NavigationContainer>
    <Screen>
        <ListItem />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
