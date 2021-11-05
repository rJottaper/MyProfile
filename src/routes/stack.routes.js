import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const StackRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();
  
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default StackRoutes;