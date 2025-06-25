import React, { useEffect, useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { validateInput } from '../../utils/utils';
import Eye from '../../assets/svg/showPassword.svg';
import EyeClose from '../../assets/svg/hidePassword.svg';
import { useAuth } from '../../context/AuthContext';
import Toast from 'react-native-toast-message';
import strings from '../../constants/strings';

const Login = ({ navigation }) => {
  const { login, register } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secureText, setSecureText] = useState(true);

  useEffect(() => {
    setEmail('');
    setName('');
    setPassword('');
    setSecureText(true);
  }, [isSignup]);

  const validateAndContinue = async () => {
    const isValid = validateInput(isSignup, email, password, name);
    if (isValid == 'valid') {
      try {
        if (isSignup) {
          await register(name, email, password);
        } else {
          await login(email, password);
        }
        navigation.navigate('Home');
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: isValid,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{strings.app_name}</Text>
      </View>
      {isSignup ? (
        <View style={styles.inputView}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={'grey'}
            style={styles.input}
            value={name}
            onChangeText={setName}
            maxLength={30}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={'grey'}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            maxLength={30}
          />
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#F0EEE9',
              borderWidth: 1,
              backgroundColor: 'white',
              minHeight: 50,
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={'grey'}
              style={styles.passwordInput}
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
              maxLength={30}
            />
            <Pressable
              style={{ flex: 0.15, justifyContent: 'center' }}
              onPress={() => setSecureText(!secureText)}
            >
              {secureText ? (
                <Eye height={20} width={20} />
              ) : (
                <EyeClose height={20} width={20} />
              )}
            </Pressable>
          </View>

          <TouchableOpacity style={styles.button} onPress={validateAndContinue}>
            <Text style={styles.buttonText}>{strings.signup}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'grey'}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            maxLength={30}
          />
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#F0EEE9',
              borderWidth: 1,
              backgroundColor: 'white',
              minHeight: 50,
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={'grey'}
              style={styles.passwordInput}
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
              maxLength={30}
            />
            <Pressable
              style={{ flex: 0.15, justifyContent: 'center' }}
              onPress={() => setSecureText(!secureText)}
            >
              {secureText ? (
                <Eye height={20} width={20} />
              ) : (
                <EyeClose height={20} width={20} />
              )}
            </Pressable>
          </View>
          <TouchableOpacity style={styles.button} onPress={validateAndContinue}>
            <Text style={styles.buttonText}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.signupView}>
        <Text style={styles.signupText1}>Dont have an account?</Text>
        <TouchableOpacity
          style={{ padding: 6 }}
          onPress={() => setIsSignup(!isSignup)}
        >
          <Text style={styles.signupText2}>
            {isSignup ? `Log in` : `Sign up`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
