import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import YourLibraryHeader from '../components/YourLibraryHeader';
import YourLibraryListHeader from '../components/YourLibraryListHeader';
import {
  Albums,
  Artists,
  PodcastsAndShows,
  Playlists,
  Tags,
} from '../FakeData';

function YourLibraryScreen({ navigation }) {
  const [tags] = useState();
  const [listOrGrid, setListOrGrid] = useState(true);
  const [categories, setCategories] = useState('Playlists');

  const showCategory = (item) => {
    setCategories(item.title);
    console.log(item.title);
  };

  return (
    <Screen>
      <YourLibraryHeader
        tags={tags}
        navigation={navigation}
        showCategory={showCategory}
      />
      {categories === 'Playlists' && (
        <FlatList
          data={Playlists}
          key={listOrGrid ? 'list' : 'grid'}
          keyExtractor={(item) => item.title}
          numColumns={listOrGrid ? 0 : 2}
          ListHeaderComponent={
            <YourLibraryListHeader
              listOrGrid={listOrGrid}
              setListOrGrid={setListOrGrid}
            />
          }
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
      )}
      {categories === 'Albums' && (
        <FlatList
          data={Albums}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={<YourLibraryListHeader />}
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
      )}
      {categories === 'Artists' && (
        <FlatList
          data={Artists}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={<YourLibraryListHeader />}
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
      )}
      {categories === 'Podcasts & Shows' && (
        <FlatList
          data={PodcastsAndShows}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={<YourLibraryListHeader />}
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
      )}
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
