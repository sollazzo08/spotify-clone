import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
import Screen from '../components/Screen';

function YourLibraryScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ color: colors.white }}>Your Library</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YourLibraryScreen;
