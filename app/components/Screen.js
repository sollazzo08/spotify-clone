import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import colors from '../constants/colors';
import SvgBackground from '../Icons/Svg.Background';
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
