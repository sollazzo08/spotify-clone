import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Tags from '../FakeData/tags.json'
import Tag from './Tag';

const TagContainer = () => {
  return (
    <View style={styles.container}>
    <FlatList
      data={Tags}
      horizontal
      keyExtractor={(item) => item.title}
      renderItem={({item}) => <Tag title={item.title}/>}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  }
});

export default TagContainer;