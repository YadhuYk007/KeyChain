import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { CommonActions } from '@react-navigation/native';
import styles from './styles';
import strings from '../../constants/strings';

const Home = ({ navigation }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{strings.app_name}</Text>
        <Pressable onPress={() => handleLogout()}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      </View>
      <View style={styles.saperator} />
      <View style={styles.card}>
        <View style={styles.avatarView}>
          <Text style={styles.avatarText}>{currentUser?.name[0]}</Text>
        </View>
        <Text style={styles.name}>{`${currentUser?.name}`}</Text>
        <Text style={styles.email}>{`${currentUser?.email}`}</Text>
      </View>
    </View>
  );
};

export default Home;
