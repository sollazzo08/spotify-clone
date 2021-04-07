import React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { colors, myStyles } from '../constants';
import Icon from './Icon';

function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={[myStyles.textOpenSans30, styles.header]}>Search</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Artists, songs or podcasts"
          textAlign="right"
        />

        <View style={styles.icons}>
          <Icon name="camera-outline" size={45} iconColor={colors.white} />
          <Icon name="microphone" size={45} iconColor={colors.white} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    width: '100%',
  },
  icons: {
    width: 170,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    height: '100%',
    fontSize: 17,
    marginLeft: 30,
  },
  searchBar: {
    width: '66%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: 'white',
  },
});

export default SearchBar;
