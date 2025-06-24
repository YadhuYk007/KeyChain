import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loading = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={'large'} color={'#3590ae'} />
    </View>
  );
};

export default Loading;
