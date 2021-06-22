import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  color?: string;
  textDecorationLine?: React.CSSProperties | string;
  fontSize?: React.CSSProperties | number;
  fontWeight?: React.CSSProperties | string;
  numberOfLines?: number;
  textTransform: string;
  style?: any;
};

const AppText: React.FC<Props> = ({
  children,
  color,
  textDecorationLine,
  fontSize,
  fontWeight,
  numberOfLines,
  textTransform,
  style,
}) => {
  return (
    <Text
      style={{
        color,
        fontSize,
        fontWeight,
        textDecorationLine,
        textTransform,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

AppText.defaultProps = {
  color: "#FFF",
  fontSize: 16,
};

export default AppText;
