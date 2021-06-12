import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  color?: React.CSSProperties;
  textDecorationLine?: React.CSSProperties | string;
  fontSize?: React.CSSProperties | number;
  fontWeight?: React.CSSProperties | string;
  numberOfLines?: number;
  style?: any;
};

const AppText: React.FC<Props> = ({
  children,
  color = '#fff',
  textDecorationLine,
  fontSize,
  fontWeight,
  numberOfLines,
  style,
}) => {
  return (
    <Text
      style={[styles.title, { color, fontSize, fontWeight,textDecorationLine, ...style }]}
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
