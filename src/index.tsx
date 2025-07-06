import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Login from './screens/login/Login';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './context/AuthContext';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <View style={styles.container}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Navigation />
            <Toast />
          </View>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
