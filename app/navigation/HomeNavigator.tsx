import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../constants/colors';
import AlbumScreen from '../screens/AlbumScreen';

export type HomeStackParamsList = {
  Home: undefined; //undefined means route has no params
  Settings: undefined;
  Album: undefined;
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator<HomeStackParamsList>();

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
            borderBottomColor: colors.primary,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white,
          },
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name="Album"
        component={AlbumScreen}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.grey,
            borderBottomColor: colors.primary,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
