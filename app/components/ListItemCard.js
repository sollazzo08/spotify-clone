import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../constants/colors';
import { images, myStyles } from '../constants';
import AppText from './AppText'

function ListItemCard({ image, onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={images[image]} />
        </View>
        <View style={styles.titleContainer}>
          <AppText style={myStyles.textOpenSans12} numberOfLines={2}>{title}</AppText>
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
});

export default ListItemCard;
