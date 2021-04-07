import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Text from './AppText';
import { images } from '../constants';
import colors from '../constants/colors';

function CoverCard({ image, onPress, subTitle, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={images[image]} />
        <View style={styles.description}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: 'column',
    width: 130,
    justifyContent: 'center',

    marginRight: 13,
  },
  image: {
    height: 130,
    width: 130,
  },
  description: {
    paddingTop: 10,
    flexDirection: 'column',
    color: colors.white,
  },
  title: {
    fontSize: 14,
    color: colors.white,
  },
});

export default CoverCard;
