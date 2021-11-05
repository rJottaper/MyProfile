import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

import HeaderNavigation from '../components/HeaderNavigation';
import Input from '../components/Input';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const goScreenHome = () => {
    if (username == '' && password == '' && email == '') {
      setIsValidUsername(false);
      setIsValidPassword(false);
      setIsValidEmail(false);
    }
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === false) {
      setIsValidEmail(false);
      setEmail(email);
      return false;
    }
    if (username == '' || username.length < 4) {
      return setIsValidUsername(false);
    }
    if (password == '' || password.length < 6) {
      return setIsValidPassword(false);
    } 
  };

  const newValueInputEmail = (value) => {
    setEmail(value);
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === true) {
      setIsValidEmail(true)
      return true
    };
   };

   const newValueInputUsername = (value) => {
     setUsername(value);
     if (value.length >= 4) {
       setIsValidUsername(true)
     };
   };

   const newValueInputPassword = (value) => {
     setPassword(value);
     if (value.length >= 6) {
       setIsValidPassword(true)
     };
   };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Sign Up" leftIcon leftIconName="chevron-left" />
      <Input name="E-mail" iconName="at" value={email} newValue={(value) => newValueInputEmail(value)} placeholder="Your E-mail" keyboardType="email-address" />
      {isValidEmail ? null : <Text style={styles.msgError}>Please, check your E-mail</Text>}
      <Input name="Username" iconName="user" value={username} newValue={(value) => newValueInputUsername(value)} placeholder="Your Username" />
      {isValidUsername ? null : <Text style={styles.msgError}>Please, check your Username</Text>}
      <Input name="Password" iconName="lock" value={password} newValue={(value) => newValueInputPassword(value)} placeholder="Your Password" secureTextEntry />
      {isValidPassword ? null : <Text style={styles.msgError}>Please, check your Password</Text>}
      <Button title="Sign Up" onPress={() => goScreenHome()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131D2A'
  },
  msgError: {
    marginTop: 10,
    marginLeft: 15,
    color: '#ff305e',
    fontWeight: 'bold'
  },
});

export default SignUp;