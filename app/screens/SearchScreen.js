import React from 'react';
import { View, StyleSheet, Text, SectionList, FlatList } from 'react-native';

import GenreCard from '../components/GenreCard';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import { colors, myStyles } from '../constants';
import DATA from '../FakeData/generes.json';

function SearchScreen() {
  return (
    <Screen style={styles.container}>
      <SearchBar />
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => {
          if (section.title === 'Your top genres')
            return (
              <>
                <View>
                  <Text
                    style={[
                      myStyles.textOpenSans16,
                      { color: colors.white, paddingBottom: 10 },
                    ]}
                  >
                    {section.title}
                  </Text>
                </View>
                <FlatList
                  data={section.data}
                  keyExtractor={(item) => item.title}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <GenreCard
                        backgroundColor={item.color}
                        title={item.title}
                      />
                    );
                  }}
                />
              </>
            );
          else if (section.title === 'Popular Podcast Cateroies')
            return (
              <>
                <View>
                  <Text
                    style={[
                      myStyles.textOpenSans16,
                      { color: colors.white, paddingBottom: 10 },
                    ]}
                  >
                    {section.title}
                  </Text>
                </View>
                <FlatList
                  data={section.data}
                  keyExtractor={(item) => item.title}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <GenreCard
                        backgroundColor={item.color}
                        title={item.title}
                      />
                    );
                  }}
                />
              </>
            );
        }}
        renderSectionFooter={({ section }) => {
          if (section.title === 'Browse All')
            return (
              <>
                <View>
                  <Text
                    style={[
                      myStyles.textOpenSans16,
                      { color: colors.white, paddingBottom: 10 },
                    ]}
                  >
                    {section.title}
                  </Text>
                </View>
                <FlatList
                  data={section.data}
                  keyExtractor={(item) => item.title}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <GenreCard
                        backgroundColor={item.color}
                        title={item.title}
                      />
                    );
                  }}
                />
              </>
            );
          else return null;
        }}
        renderItem={({ item }) => {
          return null;
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

export default SearchScreen;
