import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import TabBar from '../components/TabBar';
import HomeNavigator from './HomeNavigator';
import YourLibraryNavigator from './YourLibraryNavigator';

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
        component={YourLibraryNavigator}
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
