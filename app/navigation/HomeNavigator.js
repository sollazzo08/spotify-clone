import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import colors from '../constants/colors';
import AlbumScreen from '../screens/AlbumScreen';

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
            borderBottomColor: colors.primary
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.white
          },
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen name="AlbumPage" component={AlbumScreen} options={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.grey,
          borderBottomColor: colors.primary
        },
        
      }}/>
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
