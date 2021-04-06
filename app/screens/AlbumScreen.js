import React from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import Text from '../components/AppText';
import { images } from '../constants';
import Screen from '../components/Screen';
import DATA from '../FakeData/songData.json';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSwipeAction from '../components/ListItemSwipeAction';
import colors from '../constants/colors';

function AlbumScreen() {
  const handleLike = () => {
    console.log('Wow you really like that song');
  };

  const handleAddQueue = () => {
    console.log('Song has been added to the queue');
  };

  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle="Mac Miller"
            IconComponent={<Icon name="dots-horizontal" size={40} />}
            renderRightActions={() => (
              <ListItemSwipeAction
                IconComponent={
                  <Icon
                    name="heart-outline"
                    size={60}
                    iconColor={colors.lightgrey}
                  />
                }
                onPress={() => handleLike()}
              />
            )}
            renderLeftActions={() => (
              <ListItemSwipeAction
                IconComponent={
                  <Icon
                    name="playlist-music-outline"
                    size={60}
                    iconColor={colors.lightgrey}
                  />
                }
                onPress={() => handleAddQueue()}
              />
            )}
          />
        )}
        ListHeaderComponent={
          <View style={styles.container}>
            <Image style={styles.image} source={images['swimming']} />
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});

export default AlbumScreen;
