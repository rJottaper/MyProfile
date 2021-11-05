import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ name, iconName, value, newValue, placeholder, maxLength, secureTextEntry, keyboardType }) => {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.border} />
      <View style={styles.content}>
        <Icon style={styles.icon} name={iconName} />
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={newValue} 
          placeholder={placeholder} 
          placeholderTextColor='#B2B7D6'
          maxLength={maxLength} 
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B2B7D6',
    marginTop: 10,
    marginLeft: 15
  },
  border: {
    borderWidth: 1,
    borderColor: '#B2B7D6',
    marginLeft: 15,
    width: '25%'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#B2B7D6',
    marginHorizontal: 15
  },
  icon: {
    fontSize: 20,
    color: '#B2B7D6',
  },
  input: {
    color: '#B2B7D6',
    marginLeft: 5,
  },
});

export default Input;