import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import YourLibraryHeader from '../components/YourLibraryHeader';
import YourLibraryListHeader from '../components/YourLibraryListHeader';
import CoverCard from '../components/CoverCard';
import {
  Albums,
  Artists,
  PodcastsAndShows,
  Playlists,
  Tags,
} from '../FakeData';

//TODO: Fix list and gird toggle, look into different approach
//TODO: Add pin field to data apis, pins should always be at the top of the list

function YourLibraryScreen({ navigation }) {
  const [tags] = useState();
  const [listOrGrid, setListOrGrid] = useState(true);
  const [categories, setCategories] = useState('Playlists');

  const showCategory = (title) => {
    setCategories(title);
  };
  //TODO: functions that need to be implemented
  const filterRecentlyPlayed = () => {};
  const searchYourLibrary = () => {};
  const addPlaylist = () => {};

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
            if (listOrGrid) {
              return (
                <ListItem
                  title={item.title}
                  subTitle={item.artist}
                  image={item.image}
                  style={{ paddingBottom: 10 }}
                />
              );
            } else
              return (
                <View style={styles.container}>
                  <CoverCard image={item.image} title={item.title} />
                </View>
              );
          }}
        />
      )}
      {categories === 'Albums' && (
        <FlatList
          data={Albums}
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
            if (listOrGrid) {
              return (
                <ListItem
                  title={item.title}
                  subTitle={item.artist}
                  image={item.image}
                  style={{ paddingBottom: 10 }}
                />
              );
            } else
              return (
                <View style={styles.container}>
                  <CoverCard image={item.image} title={item.title} />
                </View>
              );
          }}
        />
      )}
      {categories === 'Artists' && (
        <FlatList
          data={Artists}
          key={listOrGrid ? 'list' : 'grid'}
          keyExtractor={(item) => item.artist}
          numColumns={listOrGrid ? 0 : 2}
          ListHeaderComponent={
            <YourLibraryListHeader
              listOrGrid={listOrGrid}
              setListOrGrid={setListOrGrid}
            />
          }
          renderItem={({ item }) => {
            if (listOrGrid) {
              return (
                <ListItem
                  title={item.title}
                  subTitle={item.artist}
                  image={item.image}
                  style={{ paddingBottom: 10 }}
                />
              );
            } else
              return (
                <View style={styles.container}>
                  <CoverCard image={item.image} title={item.artist} />
                </View>
              );
          }}
        />
      )}
      {categories === 'Podcasts & Shows' && (
        <FlatList
          data={PodcastsAndShows}
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
            if (listOrGrid) {
              return (
                <ListItem
                  title={item.title}
                  subTitle={item.artist}
                  image={item.image}
                  style={{ paddingBottom: 10 }}
                />
              );
            } else
              return (
                <View style={styles.container}>
                  <CoverCard image={item.image} title={item.title} />
                </View>
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
    marginLeft: 35,
  },
});

export default YourLibraryScreen;
