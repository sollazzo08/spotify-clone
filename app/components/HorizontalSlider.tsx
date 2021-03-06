import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import CoverCard from './CoverCard';
import { images } from '../constants'; //Imported images just for typescript.. change this

type Props = {
  data: { id: number; title: string; image: keyof typeof images }[];
  navigation: any;
};

const HorizontalSlider: React.FC<Props> = ({ navigation, data }) => {
  return (
    <View style={styles.recentContainer}>
      <AppText fontSize={23} fontWeight="bold" style={{ paddingBottom: 10 }}>
        Recently Played
      </AppText>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <CoverCard
              image={item.image}
              title={item.title}
              onPress={() => navigation.navigate('AlbumScreen')}
            />
          );
        }}
      />
    </View>
  );
};

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

export default HorizontalSlider;
