import React, { useEffect, useState } from 'react';
import { FlatList, SectionList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import YourLibraryHeader from '../components/YourLibraryHeader';
import MyAlbums from '../FakeData/albumDataa.json';
import Tags from '../FakeData/tags.json';
import Artists from '../FakeData/artists.json'

function YourLibraryScreen({ navigation }) {
  const [tags, setTags] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTags(Tags);
    });

    return unsubscribe;
  }, [navigation]);

  function showCategory (item)  {
    console.log('test')
  };

  return (
    <Screen>
      <FlatList
        data={Artists}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={<YourLibraryHeader tags={tags} navigation={navigation} showCategory={showCategory}/>}
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.artist}
              image={item.image}
              style={{ paddingBottom: 10 }}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YourLibraryScreen;
