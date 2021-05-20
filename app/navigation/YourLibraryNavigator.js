import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';
import AlbumScreen from '../screens/AlbumScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';

function YourLibraryNavigator() {
  const YourLibraryStack = createStackNavigator();
  return (
    <YourLibraryStack.Navigator>
      <YourLibraryStack.Screen
        name="Your Library"
        component={YourLibraryScreen}
        options={{ headerShown: true }}
      />
    </YourLibraryStack.Navigator>
  );
}

export default YourLibraryNavigator;
