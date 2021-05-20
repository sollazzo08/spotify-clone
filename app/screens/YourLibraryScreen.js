import React from 'react';
import { FlatList, SectionList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import TagContainer from '../components/TagContainer';
import MyAlbums from '../FakeData/albumDataa.json';

function YourLibraryScreen() {
  return (
    <Screen>
      <FlatList
        data={MyAlbums}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={<TagContainer />}
        renderItem={({ item }) => {
          return(
            <ListItem 
              title={item.title}
              subTitle={item.artist}
              image={item.image}
              style={{paddingBottom: 10}}
          />
          ) 
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
