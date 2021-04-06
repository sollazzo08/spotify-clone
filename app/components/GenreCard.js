import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Text from './AppText'

function GenreCard({backgroundColor = colors.lightgrey, title}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 170,
    borderRadius: 5,
    marginBottom: 14,
    marginHorizontal: 7
  },
  title: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default GenreCard;