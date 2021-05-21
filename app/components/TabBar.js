import React from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
import Screen from './Screen';

const windowWidth = Dimensions.get('window').width;
const tabWidth = windowWidth / 3;

function TabBar({ state, descriptors, navigation }) {
  const { routes, index: activeRouteIndex } = state;

  return (
    <Screen style={{ flex: 'none', backgroundColor: colors.grey }}>
      <View style={styles.container}>
        {routes.map((route, routeIndex) => {
          const { options } = descriptors[route.key];
          const icon = options.tabBarIcon;
          const isFocused = state.index === routeIndex;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={routeIndex}
              onPress={onPress}
              style={isFocused ? styles.tabButtonFocus : styles.tabButton}
            >
              {icon(route, route.color, route.size)}
              <Text style={styles.tabLabel}>{route.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: colors.grey,
    justifyContent: 'space-evenly',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: tabWidth,
  },
  tabButtonFocus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#828282',
    width: tabWidth,
  },
  tabLabel: {
    color: 'white',
    fontSize: 11,
  },
});

export default TabBar;
