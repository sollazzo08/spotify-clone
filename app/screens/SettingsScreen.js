import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import DATA from '../FakeData/settings.json';

function SettingsScreen() {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        onPress={() => console.log(`${item.title} was clicked`)}
      />
    );
  };

  return (
    <Screen>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        nestedScrollEnabled={true}
        ListHeaderComponent={
          <View style={styles.profile}>
            <ListItem
              image={require('../../assets/favicon.jpeg')}
              onPress={() => console.log('View profile was pressed')}
              title="Michael Sollazzo"
              subTitle="View Profile"
              size={28}
            />
          </View>
        }
        ListFooterComponent={
          <View style={styles.btnContainer}>
            <Button
              onPress={() => console.log('Log Out was pressed')}
              title="LOG OUT"
            />
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 110,
    marginTop: 40,
  },
  profile: {
    marginTop: 50,
    marginBottom: 40,
  },
});

export default SettingsScreen;
