import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import AppText from './AppText';

type Props = {
  backgroundColor: string;
  title: string;
};

const GenreCard: React.FC<Props> = ({
  backgroundColor = colors.lightgrey,
  title,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.textContainer}>
        <AppText
          fontSize={20}
          fontWeight="bold"
          style={styles.title}
          numberOfLines={2}
        >
          {title}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 170,
    borderRadius: 5,
    marginBottom: 14,
    marginHorizontal: 7,
  },
  textContainer: {
    width: '70%',
  },
  title: {
    color: colors.white,
    position: 'absolute',
    top: 6,
    left: 15,
  },
});

export default GenreCard;
