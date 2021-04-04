import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function ListItem({ image, onPress, subTitle, title }) {
  return (
    <TouchableHighlight
      underlayColor="black"
      activeOpacity={0.5}
      onPress={() => console.log(`${title} was clicked`)}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {image && <Image source={image} />}
          <Text style={styles.label}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
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
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
  },
  icon: {
    color: colors.lightgrey,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

export default ListItem;
