import React from 'react';
import { Text, StyleSheet } from 'react-native';


function AppText({
  children,
  color = '#fff',
  fontSize,
  fontWeight,
  numberOfLines,
  style,
}) {
  return (
    <Text
      style={[styles.title, { color, fontSize, fontWeight, ...style }]}
      numberOfLines={numberOfLines}
    >
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
