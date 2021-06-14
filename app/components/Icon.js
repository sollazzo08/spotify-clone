import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({ name, size, iconColor = '#FFF', onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: size,
          width: size,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name={name}
          size={size * 0.5}
          color={iconColor}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Icon;
