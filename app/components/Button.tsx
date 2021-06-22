import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

type BtnProps = {
  children?: React.ReactNode;
  backgroundColor?: any;
  height?: number;
  onPress: () => void;
  title?: string;
  width: string;
};

const Button: React.FC<BtnProps> = ({
  children,
  backgroundColor,
  height,
  onPress,
  title,
  width
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, height, width }]}
    >
      <Text style={styles.title}>{title || children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 23,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

Button.defaultProps = {
  backgroundColor: colors.white,
  height: 50,
  width: '100%'
}

export default Button;
