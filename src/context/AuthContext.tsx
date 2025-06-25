import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const USERS_KEY = 'AUTH_USERS';
  const CURRENT_USER_KEY = 'CURRENT_USER';

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const savedUser = await AsyncStorage.getItem(CURRENT_USER_KEY);
        if (savedUser) {
          setCurrentUser(JSON.parse(savedUser));
        }
      } catch (e) {
        console.error('Error loading auth state:', e);
      } finally {
        setLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const register = async (name: string, email: string, password: string) => {
    const usersRaw = await AsyncStorage.getItem(USERS_KEY);
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const userExists = users.some(u => u.email === email);
    if (userExists) throw new Error('User already exists');

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
    await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    setCurrentUser(newUser);
  };

  const login = async (email: string, password: string) => {
    const usersRaw = await AsyncStorage.getItem(USERS_KEY);
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const matchedUser = users.find(
      u => u.email === email && u.password === password,
    );

    if (!matchedUser) throw new Error('Invalid credentials');

    await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(matchedUser));
    setCurrentUser(matchedUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    setCurrentUser(null);
  };

  // Wait to render children until loading is done
  if (loading) return null; // Or return a splash screen component

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
