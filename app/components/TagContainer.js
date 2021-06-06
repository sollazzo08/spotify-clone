import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Tags from '../FakeData/tags.json';
import Tag from './Tag';

const TagContainer = ({Tags, navigation}) => {
  const [tags, setTags] = useState();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTags(Tags);
    });

    return unsubscribe;
  }, [navigation]);

  const handleTagFilter = (item) => {
    const filteredTags = Tags.filter((t) => t.id === item.id);

    console.log(filteredTags);
    setTags(filteredTags);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Tag onPress={() => handleTagFilter(item)} title={item.title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default TagContainer;
