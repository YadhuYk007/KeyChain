import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Login from './screens/login/Login';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './context/AuthContext';
import Toast from 'react-native-toast-message';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
        <Toast />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
