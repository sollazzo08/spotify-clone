import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigation/BottomTabNavigator';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import SettingsScreen from './app/screens/SettingsScreen';
import Button from './app/components/Button';
import CoverCard from './app/components/CoverCard';

export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator/>
    // </NavigationContainer>
    <View style={styles.container}>
      <CoverCard title="This is a test title" subTitle="This is a test subtitle" onPress={() => console.log('test')}/>
    </View>
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
