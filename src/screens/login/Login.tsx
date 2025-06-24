import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FAF9F6',
        padding: 16,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 100,
        }}
      >
        <Text style={{ fontSize: 38, fontWeight: '700', letterSpacing: -1 }}>
          KeyChain
        </Text>
      </View>
      <View style={{ justifyContent: 'center', paddingTop: 100 }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'grey'}
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            fontSize: 18,
            padding: 12,
            marginVertical: 10,
            color: 'black',
            minHeight: 50,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            fontSize: 18,
            padding: 12,
            marginVertical: 10,
            color: 'black',
            minHeight: 50,
            elevation: 0.5,
          }}
        />
        <TouchableOpacity
          style={{ backgroundColor: '#3590ae', borderRadius: 8, marginTop: 25 }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              paddingVertical: 14,
              textAlign: 'center',
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 100,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '600',
          }}
        >
          Dont have an account?
        </Text>
        <TouchableOpacity style={{ padding: 6 }}>
          <Text style={{ color: 'blue', fontSize: 16, fontWeight: '700' }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
