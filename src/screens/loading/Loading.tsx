import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const Loading = ({ navigation }) => {
  const { currentUser } = useAuth();
  useEffect(() => {
    currentUser ? navigation.navigate('Home') : navigation.navigate('Login');
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={'large'} color={'#3590ae'} />
    </View>
  );
};

export default Loading;
