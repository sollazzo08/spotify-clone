import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {myStyles} from '../constants'

function AppText({ children,numberOfLines, style,}) {
  return (
    <Text style={[styles.title, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
});

export default AppText;
