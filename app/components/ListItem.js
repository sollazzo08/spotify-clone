import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText'

function ListItem({ image, onPress, subTitle, title, size }) {
  return (
    <TouchableHighlight
      underlayColor="black"
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
        <View style={styles.content}>
          <AppText size={size} style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        <View>
          <MaterialCommunityIcons
            style={styles.icon}
            size={30}
            name="chevron-right"
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 50,
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  icon: {
    color: colors.lightgrey,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginRight: 20
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 60,
    paddingTop: 5,
    color: colors.white
  }
});

export default ListItem;
