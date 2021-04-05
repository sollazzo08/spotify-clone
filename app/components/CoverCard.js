import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback  } from 'react-native';
import Text from './AppText'
import { images } from '../constants'

function CoverCard({image, onPress, subTitle, title}) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
     <View style={styles.container}>
        <Image style={styles.image} source={images['swimming']}/>
       <View style={styles.description}>
        <Text>{title}</Text>
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
    width: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 160,
    width: 160,
  },
  description: {
    flexDirection: 'column'
  }
});

export default CoverCard;