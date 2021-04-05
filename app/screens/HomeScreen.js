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

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <SectionList
        sections={DATA}
        keyExtractor={item => item.title}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => {
          return(
          <>
              <Text style={{ color: colors.white, fontSize: 30 }}>
                {section.title}
              </Text>
            <FlatList 
              data={section.data}
              keyExtractor={item => item.title}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <ListItemCard
                    image={item.image}
                    title={item.title}
                  />
                )
              }}
            />
          </>
          )
          
        }}
        renderItem={({item}) => {
       
          return (
            <ListItemCard
              image={item.image}
              item={item.title}
            />
          );
        }}
      />

      {/* <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ color: colors.white, fontSize: 30 }}>Good evening</Text>
          </View>
          <View style={styles.icons}>
            <MaterialCommunityIcons name="clock-outline" size={30} color="white" />
            <MaterialCommunityIcons name="cog-outline" size={30} color="white" onPress={() => navigation.navigate('Settings')}/>
          </View>
        </View>
        <View style={styles.recentContainer}>
         <FlatList 
          data={DATA}
          renderItem={ListItemCard}
          keyExtractor={item => item.title}
          numColumns={2}
         />
        </View> */}
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
  recentContainer: {
    marginHorizontal: 20,
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
