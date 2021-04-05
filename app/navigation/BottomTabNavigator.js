import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import TabBar from '../components/TabBar';
import HomeNavigator from './HomeNavigator';

function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="magnify" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Your Library"
        component={YourLibraryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="library-shelves"
              size={25}
              color="white"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
