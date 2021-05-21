import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  backgroundColor?: any;
  onPress: () => void;
  title: string;
};

const Button: React.FC<Props> = ({
  backgroundColor = 'white',
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 23,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Button;
