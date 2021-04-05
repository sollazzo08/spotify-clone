import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style, size }) {
  return (
    <Text style={[style, { fontSize: size }]} numberOfLines={1}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 90,
  },
});

export default AppText;
