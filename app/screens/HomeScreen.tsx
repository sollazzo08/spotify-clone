import React from 'react';
import { FlatList, View, StyleSheet, SectionList } from 'react-native';
import { colors } from '../constants/colors';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItemCard from '../components/ListItemCard';
import DATA from '../FakeData/homeScreen.json';
import SvgBackground from '../Icons/Svg.Background';
import HorizontalSlider from '../components/HorizontalSlider';
import AppText from '../components/AppText';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamsList } from '../navigation/HomeNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamsList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  return (
    <Screen>
      <View style={{ position: 'absolute' }}>
        <SvgBackground />
      </View>
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
                    <AppText
                      fontSize={23}
                      fontWeight="bold"
                      style={{ paddingBottom: 10 }}
                    >
                      {section.title}
                    </AppText>
                  </View>
                  <View style={styles.icons}>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={27}
                      color={colors.lightgrey}
                    />
                    <MaterialCommunityIcons
                      name="cog-outline"
                      size={27}
                      color={colors.lightgrey}
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
              <>
                <HorizontalSlider data={section.data} navigation={navigation} />
                <HorizontalSlider data={section.data} navigation={navigation} />
              </>
            );
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
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 40,
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
