import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import colors from '../config/colors';

function HomeNavigator() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.grey,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeNavigator;
