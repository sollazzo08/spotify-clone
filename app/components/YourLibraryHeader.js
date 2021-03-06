import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagContainer from './TagContainer';
import ListItem from './ListItem';
import Icon from './Icon';

const YourLibraryHeader = ({showCategory, tags, navigation}) => {

  return (
    <View style={styles.container}>
      <ListItem
        image={require('../assets/lego_dude.jpeg')}
        title="Your Library"
        fontSize={25}
        imageRound={true}
        IconComponent={<Icon name="magnify" size={60} />}
        IconComponent2={<Icon name="plus" size={60} />}
      />
      <TagContainer Tags={tags} navigation={navigation} showCategory={showCategory}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130
  },
});

export default YourLibraryHeader;
