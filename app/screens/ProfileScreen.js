import React, { useState } from 'react';
import { Modal, Image, View, StyleSheet } from 'react-native';
import SvgBackground from '../Icons/Svg.Background';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { colors } from '../constants';

const ProfileScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Screen>
      <View style={{ position: 'absolute' }}>
        <SvgBackground topColor={colors.davysGrey} x2="100%" offset1="60%" />
      </View>
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
        <AppText color={colors.white} fontSize={30} fontWeight="600">
          Michael Sollazzo
        </AppText>
        <Button
          backgroundColor={colors.grey}
          onPress={() => console.log('hehehhehe')}
          height={40}
          width="30%"
        >
          <AppText>Edit profile</AppText>
        </Button>
      </View>
      <View></View>
      <Modal visible={visibleModal} animationType="slide" transparent={true}>
          <Screen style={styles.modal}>
            <Button onPress={() => setVisibleModal(false)} title="close" />
          </Screen>
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
    opacity: .99

  },
});

export default ProfileScreen;
