import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoginSvg from '../assets/login.svg'

import HeaderNavigation from '../components/HeaderNavigation';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const goScreenHome = () => {
    if (username == '' && password == '') {
      setIsValidUsername(false);
      setIsValidPassword(false);
    } 
    if (username == '' || username.length < 4) {
      return setIsValidUsername(false);
    } 
    if (password == '' || password.length < 6) {
      return setIsValidPassword(false);
    } 
  };

  const newValueInputUsername = (value) => {
    setUsername(value);
    if (value.length >= 4) {
      setIsValidUsername(true);
    };
  };

  const newValueInputPassword = (value) => {
    setPassword(value);
    if (value.length >= 6) {
      setIsValidPassword(true);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Login" />
      <ScrollView>
        <LoginSvg style={styles.image} width={200} height={200} />
        <Input name="Username" iconName="user" value={username} newValue={(value) => newValueInputUsername(value)} placeholder="Your Username" maxLength={15}/>
        {isValidUsername ? null : <Text style={styles.msgError}>Please, check your username!</Text>}
        <Input name="Password" iconName="lock" value={password} newValue={(value) => newValueInputPassword(value)} placeholder="Your Password" maxLength={15} secureTextEntry />
        {isValidPassword ? null : <Text style={styles.msgError}>Please, check your password!</Text>}
        <Button title="Login" onPress={() =>  goScreenHome()} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#131D2A'
  },
  image: {
    alignSelf: 'center'
  },
  msgError: {
    marginTop: 10,
    marginLeft: 15,
    color: '#ff305e',
    fontWeight: 'bold'
  }
});

export default Login;