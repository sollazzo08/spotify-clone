import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../constants';
import AppText from './AppText';

const Tag = ({ activeTag, IconComponent, onPressTag, title }) => {
  return (
    <>
      {activeTag && IconComponent}
      <TouchableOpacity onPress={onPressTag}>
        <View
          style={[
            styles.container,
            { backgroundColor: activeTag ? colors.secondary : null },
          ]}
        >
          <AppText
            color={colors.white}
            textDecorationLine="underline"
            fontSize={14}
          >
            {title}
          </AppText>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightgrey,
    marginRight: 20,
    textDecorationLine: 'underline',
  },
});

export default Tag;
