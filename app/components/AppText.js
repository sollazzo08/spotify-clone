import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style}) {
  return (
    <Text style={[style]} numberOfLines={1}>
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
