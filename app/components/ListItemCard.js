import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../config/colors';

function ListItemCard({ image, onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/favicon.jpeg')}
          />
        </View>
        <View>
          <Text style={styles.title}>Test</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: 60,
    width: 180,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  title: {
    color: colors.white,
  },
});

export default ListItemCard;
