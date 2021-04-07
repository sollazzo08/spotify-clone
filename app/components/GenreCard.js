import React from 'react';
import { View, StyleSheet } from 'react-native';
import { myStyles } from '../constants';
import colors from '../constants/colors';
import Text from './AppText'


function GenreCard({backgroundColor = colors.lightgrey, title}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.textContainer}>
        <Text style={[myStyles.textOpenSans18,styles.title]} numberOfLines={2}>{title}</Text>
      </View>
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
  textContainer:{
    width: '70%',

  },
  title: {
    color: colors.white,
    position: 'absolute',
    top: 6,
    left: 15
  }
});

export default GenreCard;