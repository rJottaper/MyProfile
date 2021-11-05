import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

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
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default StackRoutes;