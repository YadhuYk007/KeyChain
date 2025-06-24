import React from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <View style={{ flex: 1, padding: 16, marginTop: 40 }}>
      <Text>{`Hi, ${currentUser?.name}!`}</Text>
    </View>
  );
};

export default Home;
