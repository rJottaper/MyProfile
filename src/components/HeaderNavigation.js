import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderNavigation = ({ leftIcon, title, leftIconName }) => {
  if (leftIcon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon style={styles.icon} name={leftIconName} />
        </TouchableOpacity>
        <Text style={[styles.title, { marginRight: 14 }]}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 14,
    backgroundColor: '#B2B7D6',
    marginBottom: 20
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#131D2A'
  },
  icon: {
    fontSize: 16,
    color: '#131D2A',
    marginTop: 5
  }
});

export default HeaderNavigation;