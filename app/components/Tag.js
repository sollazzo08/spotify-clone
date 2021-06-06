import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../constants';
import AppText from './AppText';

const Tag = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText color={colors.white}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 90,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.lightgrey,
    marginRight: 10,
  },
});

export default Tag;
