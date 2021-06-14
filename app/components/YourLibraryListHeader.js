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
  container: {},
});

export default YourLibraryHeader;
