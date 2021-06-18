import React, { useState } from 'react';
import { Modal, Image, View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { colors } from '../constants';

const ProfileScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Screen>
      <Icon
        onPress={() => setVisibleModal(true)}
        name="dots-horizontal"
        size={45}
        color={colors.white}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/lego_dude.jpeg')}
        />
        <AppText>Michael Sollazzo</AppText>
        <Button title="Edit Profile" onPress={() => console.log('hehehhehe')} />
      </View>
      <View>
        
      </View>
      <Modal visible={visibleModal}>
        <Screen>
          <View style={styles.container}>
            <Button onPress={() => setVisibleModal(false)} title="close" />
          </View>
        </Screen>
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
});

export default ProfileScreen;
