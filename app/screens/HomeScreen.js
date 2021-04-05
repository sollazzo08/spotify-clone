import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen({navigation}) {
  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ color: colors.white, fontSize: 30 }}>Good evening</Text>
          </View>
          <View style={styles.icons}>
            <MaterialCommunityIcons name="clock-outline" size={30} color="white" />
            <MaterialCommunityIcons name="cog-outline" size={30} color="white" onPress={() => navigation.navigate('Settings')}/>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
} 

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 20
  },
  header: {
    flex: 1
  },
  icons: {
    width: 80,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default HomeScreen;
