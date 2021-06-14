import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import Icon from './Icon';

const YourLibraryHeader = ({ listOrGrid, setListOrGrid }) => {
  return (
    <View style={styles.container}>
      <ListItem
        title="Recently Played"
        toggle={listOrGrid}
        fontSize={15}
        MainIconComponent={
          <Icon
            name="swap-vertical"
            size={45}
            onPress={() => console.log('Filter recently played')}
          />
        }
        IconComponent={
          <Icon
            name="format-list-bulleted"
            size={45}
            onPress={() => setListOrGrid(!listOrGrid)}
          />
        }
        IconComponent2={
          <Icon
            name="grid"
            size={45}
            onPress={() => setListOrGrid(!listOrGrid)}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60
  },
});

export default YourLibraryHeader;
