import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { images, colors } from '../constants';
import AppText from './AppText';

function ListItem({
  image,
  imageRound = false,
  IconComponent,
  IconComponent2,
  onPress,
  renderRightActions: rightAction,
  renderLeftActions: leftAction,
  subTitle,
  title,
  style,
  fontSize = 16,
}) {

  return (
    <Swipeable renderRightActions={rightAction} renderLeftActions={leftAction}>
      <TouchableHighlight
        underlayColor="black"
        activeOpacity={0.5}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {image && (
            <Image style={[styles.image,{borderRadius:  imageRound ? 35 : 0 } ]} source={images[image] || image} />
          )}
          <View style={styles.content}>
            <AppText fontSize={fontSize} style={styles.title}>
              {title}
            </AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <View>{IconComponent}</View>
          <View>{IconComponent2}</View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    color: colors.lightgrey,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 20,
  },
  title: {
    color: 'white',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 14,
    paddingTop: 5,
    color: colors.white,
  },
});

export default ListItem;
