import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../constants/colors';
import { images, myStyles } from '../constants';
import Text from './AppText'

function ListItemCard({ image, onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={images[image]} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[myStyles.textOpenSans12, styles.title]} numberOfLines={2}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: 50,
    width: 180,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
    
  },
  titleContainer:{
    width: '50%',
    marginLeft: 10
  },
  title: {
    color: colors.white,
  },
});

export default ListItemCard;
