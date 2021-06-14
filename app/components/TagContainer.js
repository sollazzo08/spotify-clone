import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants';
import TAGS from '../FakeData/tags.json';
import Tag from './Tag';

const TagContainer = ({ showCategory }) => {
  const [tags, setTags] = useState(TAGS);
  const [activeTag, setActiveTag] = useState(false);

  // useEffect(() => {
  //   console.log(tags)

  // }, [tags]);

  const handleTagFilter = (item) => {
    // Show Icon
    const filteredTags = tags.filter((t) => t.id === item.id);
    setTags(filteredTags);
    setActiveTag(true);

    //Handle what list to show
    showCategory(item.title);
  };
  const handleCloseTag = () => {
    setActiveTag(false);
    setTags(TAGS);
    showCategory("Playlists");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.tags}>
            <Tag
              activeTag={activeTag}
              IconComponent={
                <MaterialCommunityIcons
                  name="close-circle-outline"
                  size={30}
                  color={colors.lightgrey}
                  onPress={handleCloseTag}
                />
              }
              onPressTag={() => handleTagFilter(item)}
              onPressClose={() => handleCloseTag()}
              title={item.title}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
    marginVertical: 15,
    borderColor: '#000',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 10,
  },
  tags: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export default TagContainer;
