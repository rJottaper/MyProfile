import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WelcomeSvg from '../assets/welcome.svg'

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <WelcomeSvg width={250} height={250} />
      <View style={styles.content}>
        <Text style={styles.title}>YourProfile is app to add e show to your friends your skills about programation.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#131D2A'
  },
  welcome: {
    color: '#B2B7D6',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25
  },  
  content: {
    backgroundColor: '#B2B7D6',
    width: '100%',
    height: 250,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    color: '#131D2A',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  button: {
    backgroundColor: '#131D2A',
    width: '90%',
    padding: 14,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B2B7D6'
  }
});

export default Welcome;