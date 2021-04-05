import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen'
import colors from '../constants/colors'

function SearchScreen() {
  return (
   <Screen>
    <View style={styles.container}>
      <Text style={{color: colors.white}}>Search Screen</Text>
    </View>
   </Screen> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SearchScreen;