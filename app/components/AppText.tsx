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
  fontSize = 16,
  fontWeight,
  numberOfLines,
  style,
}) => {
  return (
    <Text
      style={{ color, fontSize, fontWeight, textDecorationLine, ...style }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default AppText;
