import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  color?: React.CSSProperties;
  fontSize?: React.CSSProperties;
  fontWeight?: React.CSSProperties;
  numberOfLines?: number;
  style?: any;
};

const AppText: React.FC<Props> = ({
  children,
  color = '#fff',
  fontSize,
  fontWeight,
  numberOfLines,
  style,
}) => {
  return (
    <Text
      style={[styles.title, { color, fontSize, fontWeight, ...style }]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
});

export default AppText;
