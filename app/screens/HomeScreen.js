import React from 'react';
import {
  FlatList,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
} from 'react-native';
import colors from '../constants/colors';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItemCard from '../components/ListItemCard';
import DATA from '../FakeData/homeScreen.json';
import { images } from '../constants';
import CoverCard from '../components/CoverCard';

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => {
          if (section.title === 'Good evening')
            return (
              <>
                <View style={styles.container}>
                  <View style={styles.header}>
                    <Text style={{ color: colors.white, fontSize: 30 }}>
                      {section.title}
                    </Text>
                  </View>
                  <View style={styles.icons}>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={30}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name="cog-outline"
                      size={30}
                      color="white"
                      onPress={() => navigation.navigate('Settings')}
                    />
                  </View>
                </View>
                <View style={styles.goodEveningContainer}>
                  <FlatList
                    data={section.data}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                    renderItem={({ item }) => {
                      return (
                        <ListItemCard image={item.image} title={item.title} />
                      );
                    }}
                  />
                </View>
              </>
            );
          else if (section.title === 'Recently Played')
            return (
              <View style={styles.recentContainer}>
                <Text style={{ color: colors.white, fontSize: 30 }}>
                  {section.title}
                </Text>
                <FlatList
                  data={section.data}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.title}
                  renderItem={({ item }) => {
                    return <CoverCard image={item.image} title={item.title} />;
                  }}
                />
              </View>
            );
        }}
        renderItem={({ item }) => {
          return null;
          return <CoverCard image={item.image} title={item.title} />;
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  goodEveningContainer: {
    marginHorizontal: 20,
  },
  recentContainer: {
    marginLeft: 20,
    marginTop: 25,
  },
  header: {
    flex: 1,
  },
  icons: {
    width: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default HomeScreen;
