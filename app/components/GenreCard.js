import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Text from './AppText'


function GenreCard({backgroundColor = colors.lightgrey, title}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title2}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 170,
    borderRadius: 5,
    marginBottom: 14,
    marginHorizontal: 7,
  },
  title2: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 6,
    left: 15
  }
});

export default GenreCard;