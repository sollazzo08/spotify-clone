import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    title: 'Data Saver',
    targetScreen: 'DataSaver',
  },
  {
    id: 2,
    title: 'Account',
    targetScreen: 'Account',
  },
  {
    id: 3,
    title: 'Devices',
    targetScreen: 'Devices',
  },
  {
    id: 4,
    title: 'Car',
    targetScreen: 'Car',
  },
  {
    id: 5,
    title: 'Voice Interactions',
    targetScreen: 'VoiceInteractions',
  },
  {
    id: 6,
    title: 'Connect To Apps',
    targetScreen: 'ConnectToApps',
  },
  {
    id: 7,
    title: 'Storage',
    targetScreen: 'Storage',
  },
  {
    id: 8,
    title: 'Notifications',
    targetScreen: 'Notifications',
  },
  {
    id: 9,
    title: 'Local Files',
    targetScreen: 'LocalFiles',
  },
  {
    id: 10,
    title: 'About',
    targetScreen: 'About',
  },
];
function SettingsScreen() {
  const renderItem = ({ item }) => {
    return <ListItem title={item.title} />;
  };
  return (
    <Screen>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
        <View style={styles.btnContainer}>
          <Button onPress={() => console.log("Log Out was pressed")} title="LOG OUT"/>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 110,
    marginTop: 40
  },
});

export default SettingsScreen;
