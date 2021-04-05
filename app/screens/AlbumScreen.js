import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from '../components/AppText'
import { images } from '../constants'
import Screen from '../components/Screen'

function AlbumScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.image} source={images['swimming']}/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    height: 300,
    width: 300,
  }
});

export default AlbumScreen;