import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../config/colors';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
