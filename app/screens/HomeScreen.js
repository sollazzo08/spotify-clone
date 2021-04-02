import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

function HomeScreen() {
  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={{ color: colors.white }}>Home Screen</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;
