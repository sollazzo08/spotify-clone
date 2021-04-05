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
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'column',
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    height: 130,
    width: 130,
  },
  description: {
    flexDirection: 'column',
    color: colors.white,
  },
  title: {
    color: colors.white,
  },
});

export default CoverCard;
